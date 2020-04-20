import { newAppointments, newFreeAppointments } from "./dataJson";
import { getAddFormat, getUpdateFormat, createFreeAppointments } from "../Appointments/Config";
import moment from "moment";
var actAppointments = newAppointments;

const url = "http://localhost:8080/v1/";
const urlPrueba = "https://enk1g8036frc8.x.pipedream.net/";

const tempDelete = (id) =>{
    actAppointments = actAppointments.filter( item =>{
        return( item.id !== id);
    });
}

const tempAdd = (appointment) => {
    appointment = getAddFormat(appointment, actAppointments.length);
    actAppointments.push(appointment);
    getAppointments(appointment.date);
    actAppointments.sort((a,b) => {
        return (a.date > b.date) ? 1 : -1;
    });
}

const tempUpdate = (appointment) => {
    console.log(appointment);
    console.log(actAppointments);
    actAppointments = actAppointments.map((item) => {
        if(item.id !== appointment.id)
            item.date.set({
                date: appointment.date.date()
            });
        else
            item = appointment;
        return(item);
    });
    
    actAppointments.sort((a,b) => {
        return (a.date > b.date) ? 1 : -1;
    });
    console.log(actAppointments);
}

export const addAppointment = (data, updateAppointments, showAlert) => {
    //const endPoint = url + 'appointments/' ;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.satus === 200){
            
        }else {
            //showAlert(false, "Error. The appointmet wasn't added");
        }
    }
    request.open("POST", urlPrueba, true);
    request.send(JSON.stringify(data));

    tempAdd(data);
    showAlert(true, 'Appointmet was added');
    updateAppointments(new moment(data.date));
}

export const updateAppointement = (appointment, updateAppointments, showAlert) => {
    //const endPoint = url + 'appointments/' + appointment.id;
    
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.satus === 200){
            
        } else {
            //showAlert(false, "Error. The appointmet wasn't updated");
        }
    }
    request.open("PUT", urlPrueba, true);
    request.send(JSON.stringify(appointment.data));

    appointment = getUpdateFormat(appointment.data);
    tempUpdate(appointment);
    showAlert(true, 'Appointmet was updated');
    updateAppointments(appointment.date);
}

export const deleteAppointement = (appointment, updateAppointments, showAlert) => {
    //const endPoint = url + 'appointments/' + appointment.id;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4) {
            if (this.satus === 200){
                
            } else {
                //showAlert(false, "Error. The appointmet wasn't delete");
            }
        }
    }

    request.open("DELETE", urlPrueba, true);
    request.send(JSON.stringify(appointment.id));

    showAlert(true, 'Appointmet was delete');
    tempDelete(appointment.id);
    updateAppointments(appointment.date);
}

export const getAppointments = (date) => {
    //const endPoint = url + 'appointments/';
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
        } else {
            //showAlert(false, "Error. It was a failure to get appointmets");
        }
    }

    request.open('GET', urlPrueba , true);
    request.send();

    actAppointments = actAppointments.map((item) => {
        item.date.set({
            date: date.date()
        });
        return(item);
    });

    return actAppointments;

}

export const newSchedule = (schedule, setAppointments) => {
    //const endPoint = url + 'shedules/';
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            let day = new moment(schedule.attentionDate);
            let appointments = createFreeAppointments(schedule);
            console.log(schedule);
            actAppointments = appointments.map((item) => {
                item.date.set({
                    date: day.date()
                });
                return(item);
            });
            setAppointments(day, actAppointments);
        }
    }

    request.open('POST', urlPrueba , true);
    request.send(JSON.stringify(schedule));
    console.log(schedule);
}
