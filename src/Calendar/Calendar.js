import React from 'react';
import DayView from './Views/Day/DayView';
import StatusBar from './Views/ConfigBar/StatusBar'
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';
import PickerDay from './Views/ConfigBar/PickerDay';
import { getDateAppointments } from './util/request';
import { stringDate, generateAppointmentData } from './Appointments/Config';
import AppointmentForm from './Appointments/AppointmentForm';
import MoreInfoAppointment from './Appointments/MoreInfo';
import AlertMessage from './Alerts/AlertMessage';

export default class Calendar extends React.Component {

    constructor(props){
        const today = new moment();
        today.set({hour:0,minute:0,second:0,millisecond:0});
        super(props);
        this.state = {
            status : {
                free: true,
                pending: true,
                confirm: true,
            },
            dateSelected: {
                date: today,
                appointments: getDateAppointments(today)
            },
            modal: {
                info: false,
                appointment: null,
                form: false,
                stringDate: stringDate(today)
            },
            alert : {
                statusOk: true,
                show: false,
                message: '',
            }
        }
        
    }

    showAlert = (status, msg) => {
        console.log('empece')
        setTimeout( this.setState({
            alert : {
                statusOk: status,
                show: true,
                message: msg,
            }
        }) , 5000);

        this.setState({
            alert : {
                statusOk: true,
                show: false,
                message: ''
            }
        });
    }

    setDateSelected = (day) => {
        this.setState({
            dateSelected: {
                date: day,
                appointments: getDateAppointments(day)
            }
        });
    }
    
    setStatus = (checkF, checkP, checkC) => {
        this.setState({
            status:{
                free: checkF,
                pending: checkP,
                confirm: checkC
            } 
        });
    }

    showModal = (item) => {
        let isnull = item.appointment == null;
        this.setState({
            modal: {
                info: !isnull,
                appointment: generateAppointmentData(item.appointment),
                form: isnull,
                stringDate: item.actDate
            }
        });
    }

    setModal = (infoClose, formClose, appointmentSelected) => {
        
        this.setState({
            modal: {
                info: infoClose,
                appointment: generateAppointmentData(appointmentSelected),
                form: formClose,
                stringDate: this.state.modal.stringDate
            }
        });
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <StatusBar status={this.state.status} setStatus={this.setStatus}/>
                        </Col>
                        <Col>
                            <PickerDay dateSelected={this.state.dateSelected} setDateSelected={this.setDateSelected}/>
                        </Col>
                    </Row>
                </Container>
                <DayView dateSelected={this.state.dateSelected} status={this.state.status} showModal={this.showModal}/>
                <MoreInfoAppointment modal={this.state.modal} setModal={this.setModal} showAlert={this.showAlert} setDateSelected={this.setDateSelected}/>
                <AppointmentForm modal={this.state.modal} setModal={this.setModal}/>
                <AlertMessage alert={this.state.alert} />
            </div>
        );
    }
}