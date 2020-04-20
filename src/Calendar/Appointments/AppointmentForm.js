import React from 'react';
import { Form, Container, Modal, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { newAppointmentData, STATUS_FREE, STATUS_CONFIRM, STATUS_PENDING, setUpdateFormat, setAddFormat } from './Config';

//Icons
import CalendarToday from "@material-ui/icons/CalendarToday";
import FaceRounded from '@material-ui/icons/FaceRounded'; //Icono paciente
import InfoIcon from '@material-ui/icons/Info';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CommentIcon from '@material-ui/icons/Comment'
import { addAppointment, updateAppointement } from '../util/request';


class AppointmentForm extends React.Component {
    
    constructor(props){
        super(props);
        this.dayValue = React.createRef();
        this.hourValue = React.createRef();
        this.minValue = React.createRef();
        this.comments = React.createRef();
        this.statusValue = React.createRef();
    }

    setDefaultData = (e) => {
        const isNewAppointment = this.props.modal.appointment == null;
        this.comments.current.value = isNewAppointment ? '': this.props.modal.appointment.comments;
        this.statusValue.current.value = isNewAppointment ? STATUS_PENDING: this.props.modal.appointment.status;
        this.dayValue.current.value = this.props.modal.stringDate.date;
        this.hourValue.current.value = this.props.modal.stringDate.hour;
        this.minValue.current.value = this.props.modal.stringDate.min;
    }

    onSubmitAppointment = (e, appointment, isNewAppointment, isPendingAppointment) => {
        e.preventDefault();
        
        const day = this.dayValue.current.value;
        const hour = this.hourValue.current.value;
        const min = this.minValue.current.value;
        appointment.status = isPendingAppointment? this.statusValue.current.value: appointment.status;
        const updAppointmentF = setUpdateFormat(appointment, day, hour, min);
        const addAppointmentF = setAddFormat(appointment, day, hour, min);

        this.props.setModal(false, false, null);

        if(isNewAppointment){
            addAppointment(addAppointmentF, this.props.setDateSelected, this.props.showAlert);
        } else {
            updateAppointement(updAppointmentF, this.props.setDateSelected, this.props.showAlert);
        }
    }

    onHide = () => {
        this.props.setModal(false, false, null);
    }

    render(){
        const isNewAppointment = this.props.modal.appointment == null;
        const appointment = isNewAppointment? newAppointmentData(): this.props.modal.appointment;
        const isFreeAppointment = isNewAppointment ? true : appointment.status === STATUS_FREE ;
        const isPendingAppointment = isNewAppointment ? false : appointment.status === STATUS_PENDING;
        
        return(
            <Modal show={this.props.modal.form} onHide={this.onHide} animation='true' onShow={this.setDefaultData}>
                <Modal.Header closeButton>
                    <Modal.Title ></Modal.Title> 
                </Modal.Header>
                <Form onSubmit={(e) => {this.onSubmitAppointment(e, appointment, isNewAppointment, isPendingAppointment) }}>
                <Modal.Body className="align-bottom">
                <Container fluid>
                    <Form.Group as={Row}>
                        <Form.Label><h3>{appointment.title}</h3></Form.Label>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column xs='3' className='label-form'>
                            <span className='d-inline icon-form '>
                                <CalendarToday/>
                            </span>
                            Date: 
                        </Form.Label>
                        <Col >
                            <Form.Control type="date" ref={this.dayValue}/>
                        </Col>
                    </Form.Group>
                        
                    <Form.Group as={Row}>
                        <Form.Label column xs='3' className='label-form'>
                            <span className='d-inline icon-form '>
                                <AccessTimeIcon />
                            </span>
                            Hour: 
                        </Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='23' step='1' ref={this.hourValue}/>
                        </Col>
                        <Form.Label >:</Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='30' step="30" ref={this.minValue}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column xs='3' className='label-form'>
                            <span className='d-inline icon-form '>
                                <InfoIcon/>
                            </span>
                            Status: 
                        </Form.Label>
                        {(!isPendingAppointment) && (
                            <Col><Form.Label >{appointment.status}</Form.Label></Col>
                        )}
                        {isPendingAppointment && (<Col><Form.Control as='select' ref={this.statusValue}>
                            <option value={STATUS_PENDING}>{STATUS_PENDING}</option>
                            <option value={STATUS_CONFIRM}>{STATUS_CONFIRM}</option>
                        </Form.Control></Col>)}
                    </Form.Group>
                    { (!isFreeAppointment) && (<Form.Group as={Row}>
                        <Form.Label column xs='3' className='label-form'>
                            <span className='d-inline icon-form '>
                                <FaceRounded/>
                            </span>
                            Patient: 
                        </Form.Label>
                        <Col>
                            <Form.Label>{appointment.patientName}</Form.Label>
                        </Col>
                    </Form.Group>)}
                    
                    <Form.Group as={Row}>
                        <Form.Label column xs='3' className='label-form'> 
                            <span className='d-inline '>
                                <CommentIcon/>
                            </span>  Comments: </Form.Label>
                        <Col>
                            <Form.Control as="textarea" ref={this.comments}/>
                        </Col>
                    </Form.Group>

                </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit"> Save </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        );
    }

}

export default AppointmentForm;