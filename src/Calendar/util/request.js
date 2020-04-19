import { newAppointments } from "./dataJson";
var actAppointments = newAppointments;

const url = "http://localhost:8080/v1/";
const urlPrueba = "https://enk1g8036frc8.x.pipedream.net/";

const tempSetActAppointments = (appointments) => {
    actAppointments = appointments;
}

const tempDelete = (id) =>{
    actAppointments = actAppointments.filter( item =>{
        return( item.id !== id);
    });
}

export const addAppointment = (data) => {
    const endPoint = url;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.satus === 200)
        console.log("Respuesta: "+ this.responseText)
    }
    request.open("POST", urlPrueba, true);
    //Mandar datos por el body en JSON
    request.send(JSON.stringify(data));
}

export const updateAppointement = (appointment) => {
    const endPoint = url + appointment.id;

    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.satus === 200)
        console.log("Respuesta: "+ this.responseText)
    }
    request.open("PUT", urlPrueba, true);
    //Mandar datos por el body en JSON
    request.send(JSON.stringify(appointment.data));
}

export const deleteAppointement = (appointment, getAppointments, showAlert) => {

    /*const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4) {
            if (this.satus === 200){
                callback(true, 'Appointmet was delete');
                tempDelete(id);
                getDateAppointments(date);
            } else {
                callback(false, "Error. The appointmet wasn't delete");
            }
        }
    }

    request.open("DELETE", urlPrueba, true);
    request.send(JSON.stringify(appointment.id));*/
    
    showAlert(true, 'Appointmet was delete');
    tempDelete(appointment.id);
    getAppointments(appointment.date);
}

export const getDateAppointments = (date) => {
    
    var appointments = [];
   
    for (const appointment of actAppointments) {
        
        appointment.date.set({
            date: date.date()
        });
        appointments.push(appointment);
    }
    tempSetActAppointments(appointments);
    return appointments;
    
    /*const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            const response = JSON.parse(this.responseText);
            const data = response.Search;
            callback(data);
            console.log("proceso exitoso")
        }
    }

    request.open('GET', urlPrueba , true);
    request.send();*/

}

