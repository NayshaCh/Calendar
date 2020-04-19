import React from 'react';
import moment from 'moment';
import { Form, Container, Modal, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

//Icons
import CalendarToday from "@material-ui/icons/CalendarToday";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { setScheduleFormat } from '../Appointments/Config';
import { newSchedule } from '../util/request';


class ScheduleForm extends React.Component {
    constructor(props){
        super(props);
        this.dayValue = React.createRef();
        this.maxHourValue = React.createRef();
        this.maxMinValue = React.createRef();
        this.minHourValue = React.createRef();
        this.minMinValue = React.createRef();
    }

    setDefaultData = (e) =>{
        this.dayValue.current.value = new moment().format("YYYY-MM-DD");
        this.minHourValue.current.value = 8;
        this.minMinValue.current.value = 0;
        this.maxHourValue.current.value = 15;
        this.maxMinValue.current.value = 0;
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.showSchedule(false);
        const day = this.dayValue.current.value;
        const minhour = this.minHourValue.current.value;
        const minMin = this.minMinValue.current.value;
        const maxhour = this.maxHourValue.current.value;
        const maxmin = this.maxMinValue.current.value;
        let schedule = setScheduleFormat(day, minMin, minhour, maxmin, maxhour);

        newSchedule(schedule, this.props.setAppointments);
    }

    onHide = () => {
        this.props.showSchedule(false);
    }

    render(){
        return(
            <Modal show={this.props.schedule} onHide={this.onHide} animation='true' onShow={this.setDefaultData}>
                <Modal.Header closeButton>
                    <Modal.Title >Create Schedule</Modal.Title> 
                </Modal.Header>
                <Form onSubmit={this.onSubmitForm}>
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
                        <Form.Label>Min Hour: </Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='23' step='1' ref={this.minHourValue}/>
                        </Col>
                        <Form.Label >:</Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='30' step="30" ref={this.minMinValue}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <AccessTimeIcon />
                        <Form.Label>Max Hour: </Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='23' step='1' ref={this.maxHourValue}/>
                        </Col>
                        <Form.Label >:</Form.Label>
                        <Col>
                            <Form.Control type='number' min='0' max='30' step="30" ref={this.maxMinValue}/>
                        </Col>
                    </Form.Group>
                
                </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit"> Create </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

export default ScheduleForm;