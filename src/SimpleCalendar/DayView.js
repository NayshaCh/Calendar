import React from 'react';
import { Table } from 'react-bootstrap';
import SimpleAppointment from './SimpleAppointment';
import moment from 'moment';

class DayView extends React.Component{

    getHeaderDayName = () =>{
        return ( {
            dayName: this.props.dateSelected.date.format('dddd'),
            dayNumber: this.props.dateSelected.date.format('Do')
        });
    }

    generateHours = () => {
        const day = this.props.dateSelected.date.format('YYYY-MM-DD');
        const appointments = this.props.dateSelected.appointments;
        const actHour = new moment(day + " " +this.props.min);
        const endHour = new moment(day + " " +this.props.max);

        const newSchedule = [];

        let cont = 0;
        for(actHour; actHour <= endHour; actHour.add(30, 'minutes')){
            let data = null;
            if(appointments[cont].date.format() === actHour.format()){
                data = {
                    hour: actHour.format('LT'),
                    appointment: appointments[cont]
                }
                cont++;
            }
            newSchedule.push(data);
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
            <Table>
                <thead>
                    <tr>
                        <th>
                            <h6>{header.dayNumber}</h6>
                            <p>{header.dayName}</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    schedule.map( (item, i) => {
                        var keyid= i++ +'tr_sche_a';
                        console.log(item);
                        return(
                            <tr key={keyid}>
                                <td>
                                    { (item != null) && (< SimpleAppointment appointment={item.appointment} />)}
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
        );
    }
}

export default DayView;