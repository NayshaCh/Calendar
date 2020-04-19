import React from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import FullAppointment from '../../Appointments/FullApppointment';
import {stringDate, STATUS_PENDING, STATUS_CONFIRM, STATUS_FREE } from '../../Appointments/Config';

export default class DayView extends React.Component {

    getHeaderDayName = () =>{
        return ( {
            dayName: this.props.dateSelected.date.format('dddd'),
            dayNumber: this.props.dateSelected.date.format('Do')
        });
    }

    generateHours = () => {
        
        const date = this.props.dateSelected.date;
        const appointments = this.props.dateSelected.appointments;
        const sizeAppointment = appointments != null ? appointments.length : 0;
        const startHour = sizeAppointment > 0 ? appointments[0].date.format(): date.set({hour:8,minute:0,second:0,millisecond:0}).format();
        const endHour = sizeAppointment > 0 ? appointments[sizeAppointment - 1].date: date.add(9, 'hours');
        const newSchedule = [];

        let cont = 0;
        for(let actHour = new moment(startHour); actHour <= endHour; actHour.add(30, 'minutes')){
            let date = sizeAppointment > 0 ? appointments[cont].date.format() : null;
            newSchedule.push({ 
                hour: actHour.format('LT'),
                appointment: date === actHour.format() ? appointments[cont] : null,
                actDate: stringDate(actHour)
            });
            cont += date === actHour.format() ? 1 : 0;
        }
        
        return newSchedule;
    }

    showMoreInfo = (e, item) => {
        this.props.showModal(item);
    
    }

    render () {
        const header = this.getHeaderDayName();
        const schedule = this.generateHours();

        return(
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>
                                <p></p><p>Hours</p>
                            </th>
                            <th>
                                <h5>{header.dayNumber}</h5>
                                <p>{header.dayName}</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schedule.map( (item, i) => {
                                var keyid= i++ +'tr_sche';
                                return(
                                    <tr key={keyid} onClick = {((e) => this.showMoreInfo(e, item))}>
                                        <td>{item.hour}</td>
                                        <td >
                                            {
                                                (item.appointment != null) && 
                                                ( ((item.appointment.status === STATUS_FREE && this.props.status.free) ||
                                                    (item.appointment.status === STATUS_CONFIRM && this.props.status.confirm) ||
                                                    (item.appointment.status === STATUS_PENDING && this.props.status.pending))
                                                    &&( <FullAppointment appointment={item.appointment}/>)
                                                )
                                            }
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }

}