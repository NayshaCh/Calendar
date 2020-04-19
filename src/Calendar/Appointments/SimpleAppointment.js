import React from 'react';
import { STATUS_FREE, COLOR_STATUS_FREE, COLOR_STATUS_CONFIRM, COLOR_STATUS_PENDING, STATUS_CONFIRM } from './Config';
import {  Alert } from 'react-bootstrap';

export default class SimpleAppointment extends React.Component {
    constructor(props){
        super(props);

        this.appointmentData = {
            id: props.appointment.id,
            status: props.appointment.status,
            colorStatus: props.appointment.status === STATUS_FREE ? COLOR_STATUS_FREE :
                        props.appointment.status === STATUS_CONFIRM ? COLOR_STATUS_CONFIRM : COLOR_STATUS_PENDING,
            hour: props.appointment.date.format('LT')
        }

    }
    render(){
        return(

            <Alert variant = {this.appointmentData.colorStatus} >
                <p>{this.appointmentData.hour}</p>
            </Alert>

        );
    }
}