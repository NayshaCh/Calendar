import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import CalendarToday from '@material-ui/icons/CalendarToday';
import FaceRounded from '@material-ui/icons/FaceRounded';
import Room from '@material-ui/icons/Room';
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
        console.log('MoreInfo Delete')
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
                        <Row><Col> 
                            <EditIcon onClick={this.editAppointment}/>
                            <DeleteIcon onClick={this.deleteAppointment} /> 
                        </Col></Row>
                        {!isNullAppointment && (<Row><Col> 
                            <Modal.Title className=''>{appointment.title}</Modal.Title> 
                        </Col></Row>)}
                    </Container>
                </Modal.Header>
                <Modal.Body className="align-bottom">
                    
                    { !isNullAppointment && 
                        (<Container>
                            <Row> 
                                <CalendarToday />{appointment.date.format('LLLL')}
                            </Row>
                            {!isFreeAppointment && (<Row>
                                <FaceRounded />{appointment.patientName}
                            </Row>)}
                        </Container>)
                    }
                    
                </Modal.Body>
            </Modal>
        );
    }
}

export default MoreInfoAppointment;