import React from 'react';
import { Container } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

const today = new Date();
const weekNumber = moment("2020-04-10").week();
var startDate = moment.day("Monday").week(weekNumber);
const dates = [];
for (let i = 0; i < 7; i++) {
    date.push(startDate.add(i, 'days'));  
} 

export default class WeekView extends React.Component {
    
    constructor(props){
        super(props);
        this.date = props.date != null ? props.date : new Date();
        this.headers = {};
        this.hourMax = props.hourMax;
        this.hourMin = props.hourMin;
        this.hours = {};
        getHeaderWeek();
    }

    

    getHeaderWeek = () => {
        for (let i = 0; i < 7; i++) {
            let day = this.date;
            day.setDate(today.getDate() + i);
            this.headers.push(getHeaderDay(day));
        }
    }

    getHeaderDay(date){
        return {
            dayName: this.getHeaderDayName(date.getDay()),
            numberDay: date.getDay()
        }
    }

    getHeaderDayName(numberDayWeek){
        let nameDay = '';

        switch (numberDayWeek){
            case 0:
                nameDay = 'Sunday';
                break;
            case 1:
                nameDay = 'Monday';
                break;
            case 2:
                nameDay = 'Tuesday';
                break;
            case 3:
                nameDay = 'Wednesday';
                break;
            case 4:
                nameDay = 'Thursday';
                break;
            case 5:
                nameDay = 'Friday';
                break;
            case 6:
                nameDay = 'Saturday';
                break;
        }
        return nameDay;
    }
    
    render () {
        return(
            <div fluid>
                <Table>
                    <thead>
                        <tr>
                            {
                                this.headers.map(header => {
                                    return(
                                        <td>
                                            <Label>header.dayName</Label>
                                            <h5>header.numberDay</h5>
                                        </td>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </div>
        );
    }
}