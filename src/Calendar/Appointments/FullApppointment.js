import React from 'react';
import { Container, Row, Alert, Col } from 'react-bootstrap';
import { STATUS_FREE, generateAppointmentData_Color } from './Config';

class FullAppointment extends React.Component {

    render(){
        const appointmentData = generateAppointmentData_Color(this.props.appointment);
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <Alert variant = {appointmentData.colorStatus}>
                        <h6>{appointmentData.title}</h6>
                        {
                            appointmentData.status !== STATUS_FREE && (
                                "Patient: " + appointmentData.patientName
                            )
                        }
                        </Alert>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FullAppointment;