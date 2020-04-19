import React from 'react';
import { Form, Container, Modal, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { newAppointmentData, STATUS_FREE, STATUS_CONFIRM, STATUS_PENDING, setUpdateFormat, setAddFormat } from './Config';

//Icons
import CalendarToday from "@material-ui/icons/CalendarToday";
import FaceRounded from '@material-ui/icons/FaceRounded'; //Icono paciente
import InfoIcon from '@material-ui/icons/Info';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { addAppointment, updateAppointement } from '../util/request';


class AppointmentForm extends React.Component {
    
    constructor(props){
        super(props);
        this.dayValue = React.createRef();
        this.hourValue = React.createRef();
        this.minValue = React.createRef();

    }

    setDefaultData = (e) =>{
        this.dayValue.current.value = this.props.modal.stringDate.date;
        this.hourValue.current.value = this.props.modal.stringDate.hour;
        this.minValue.current.value = this.props.modal.stringDate.min;
    }

    onSubmitAppointment = (e, appointment, isNewAppointment) => {
        e.preventDefault();
        const day = this.dayValue.current.value;
        const hour = this.hourValue.current.value;
        const min = this.minValue.current.value;
        const updAppointmentF = setUpdateFormat(appointment, day, hour, min);
        const addAppointmentF = setAddFormat(appointment, day, hour, min);

        if(isNewAppointment){
            addAppointment(addAppointmentF);
        } else {
            updateAppointement(updAppointmentF);
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
                    <Modal.Title >{appointment.title}</Modal.Title> 
                </Modal.Header>
                <Form onSubmit={(e) => {this.onSubmitAppointment(e, appointment, isNewAppointment) }}>
                <Modal.Body className="align-bottom">
                <Container>
                    <Form.Group as={Row}>
                        <CalendarToday/>
                        <Form.Label>Date: </Form.Label>
                        <Col>
                            <Form.Control type="date" ref={this.dayValue}/>
                        </Col>
                    </Form.Group>
                        
                    <Form.Group as={Row}>
                        <AccessTimeIcon />
                        <Form.Label>Hour: </Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='23' step='1' ref={this.hourValue}/>
                        </Col>
                        <Form.Label >:</Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='30' step="30" ref={this.minValue}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <InfoIcon/>
                        <Form.Label>Status: </Form.Label>
                        {(!isPendingAppointment) && (
                            <Col><Form.Label>{appointment.status}</Form.Label></Col>
                        )}
                        {isPendingAppointment && (<Col><Form.Control as='select' ref={this.statusValue}>
                            <option value={STATUS_PENDING}>{STATUS_PENDING}</option>
                            <option value={STATUS_CONFIRM}>{STATUS_CONFIRM}</option>
                        </Form.Control></Col>)}
                    </Form.Group>
                    { (!isFreeAppointment) && (<Form.Group as={Row}>
                            <FaceRounded/>
                            <Form.Label>Patient: </Form.Label>
                            <Col><Form.Label>{appointment.patientName}</Form.Label></Col>
                    </Form.Group>)}
                
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