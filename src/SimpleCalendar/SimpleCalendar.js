import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import DayView from './DayView';
import { newFreeAppointments } from '../Calendar/util/dataJson';
import moment from 'moment';


class SimpleCalendar extends React.Component {
    constructor(props){
        super(props);
        this.today = new moment();
    }

    generateDayViews = () => {
        const actDay = new moment(this.state.dateSelected.date.format('YYYY-MM-DD'));
        const datesAppointments = [];
        for(let i=0; i < 5; i++){
            actDay = actDay.add(i, 'day');
            let dateSelected = {
                date: new moment(actDay.format('YYYY-MM-DD')),
                appointments: newFreeAppointments[i]
            };

        }
    }

    render(){
        const dateSelected = {
            date: new moment('2020-04-20'),
            appointments: newFreeAppointments[0]
        };
        const min = '09:00';
        const max = '14:00';
        return(
            <Container>
                <Row>
                    <Col>
                        <DayView dateSelected={dateSelected} min={min} max={max}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SimpleCalendar;