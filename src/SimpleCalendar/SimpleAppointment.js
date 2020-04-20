import React from 'react';
import {  Alert } from 'react-bootstrap';

export default class SimpleAppointment extends React.Component {
    

    render() {
        const colorStatus = 'secondary';
        const hour = this.props.appointment.date.format('LT');
        return(

            <Alert variant = {colorStatus} >
                <p>{hour}</p>
            </Alert>

        );
    }
}