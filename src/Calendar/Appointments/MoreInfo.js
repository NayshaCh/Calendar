import React from 'react';
import { Modal, Container, Row, Col, FormLabel, FormGroup, Button, ButtonGroup } from 'react-bootstrap';
import CalendarToday from '@material-ui/icons/CalendarToday';
import FaceRounded from '@material-ui/icons/FaceRounded';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { STATUS_FREE} from './Config';
import { deleteAppointement } from '../util/request';


class MoreInfoAppointment extends React.Component {

    editAppointment = e => {
        this.props.setModal(false, true, this.props.modal.appointment);
        console.log(this.props.modal.appointment.date.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
    }

    deleteAppointment = () => {
        const appointment = this.props.modal.appointment;
        this.props.setModal(false, false, null);
        deleteAppointement(appointment, this.props.setDateSelected, this.props.showAlert);
    }

    onHide = () => {
        this.props.setModal(false, false, null);
    }

    render(){
        const appointment = this.props.modal.appointment;
        const isNullAppointment = appointment == null;
        const isFreeAppointment = isNullAppointment? true : appointment.status === STATUS_FREE;
        
        return(
            <Modal show={this.props.modal.info} onHide={this.onHide} animation='true'>
                <Modal.Header closeButton>
                    <Container>
                        <Row ><Col className="d-flex justify-content-end btns-container"> 
                        <ButtonGroup>
                            <Button className='close btns-form' ><EditIcon onClick={this.editAppointment}/></Button>
                            <Button className='close btns-form'><DeleteIcon onClick={this.deleteAppointment} /></Button> 
                        </ButtonGroup>
                        </Col></Row>
                        {!isNullAppointment && (<Row><Col> 
                            <Modal.Title className=''>{appointment.title}</Modal.Title> 
                        </Col></Row>)}
                    </Container>
                </Modal.Header>
                <Modal.Body >
                    
                { !isNullAppointment && 
                    (<Container >
                        <Row>
                            <div className='col-form-label'><CalendarToday /></div>
                            <FormLabel column>{appointment.date.format('LLLL')}</FormLabel>
                        </Row>
                        {!isFreeAppointment && (<Row>
                            <div className='col-form-label'><FaceRounded /></div>
                            <FormLabel column>{appointment.patientName}</FormLabel>
                        </Row>)}
                        <Row> 
                            <div className='col-form-label'><CommentIcon /></div>
                            <FormLabel column>{appointment.comments}</FormLabel>
                        </Row>
                    </Container>)
                }
                    
                </Modal.Body>
            </Modal>
        );
    }
}

export default MoreInfoAppointment;