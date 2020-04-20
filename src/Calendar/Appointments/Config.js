import moment from "moment";
import { idDoctor } from "../util/storageUtils";

export const STATUS_FREE = 'Free';
export const STATUS_PENDING = 'Pending';
export const STATUS_CONFIRM = 'Confirm';

export const COLOR_STATUS_FREE = 'light';
export const COLOR_STATUS_CONFIRM = "primary";
export const COLOR_STATUS_PENDING = "warning";

export const generateAppointmentData = (appointment) => {
    return ( appointment == null ? null : {
            id: appointment.id,
            idUser: appointment.idUser,
            status: appointment.status,
            date: appointment.date,
            title: 'Appointment ' + appointment.status,
            patientName: appointment.patientName,
            comments: appointment.comments
        }
    );
    
}

export const generateAppointmentData_Color = (appointment) => {
    return ( appointment == null ? null : {
            id: appointment.id,
            idUser: appointment.idUser,
            status: appointment.status,
            date: appointment.date,
            title: 'Appointment ' + appointment.status,
            patientName: appointment.patientName,
            colorStatus: appointment.status === STATUS_FREE ? COLOR_STATUS_FREE :
                        appointment.status === STATUS_CONFIRM ? COLOR_STATUS_CONFIRM : COLOR_STATUS_PENDING,
            comments: appointment.comments
        }
    );
}

export const newAppointmentData = () => {
    return (
        {
            id: -1,
            status: STATUS_FREE,
            date: new moment(),
            title: 'Appointment ' + STATUS_FREE,
            comments: ''
        }
    );
}

export const stringDate = (dateObj) => {
    return({
        date: dateObj.format('YYYY-MM-DD'),
        hour: dateObj.format('HH'),
        min: dateObj.format('mm')
    });
}

export const setUpdateFormat = (appointment, day, hour, min) => {
    "localhos.../id - PUT" 
    return({
        id: appointment.id,
        data : {
            id: appointment.id,
            idUser : appointment.idUser,
            idDoctor: idDoctor,
            patientName: appointment.patientName,
            date: day,
            hour: hour + ':' + min,
            status: appointment.status,
            comments: appointment.comments
        }
    });
}

export const setAddFormat = (appointment, day, hour, min) => {

    return({
        id : appointment.id,
        idUser : appointment.idUser,
        idDoctor: idDoctor,
        date: day,
        hour: hour + ':' + min,
        status: appointment.status,
        comments: appointment.comments
    });
}

export const getAddFormat = (appointment, id) => {
    return({
        id: id,
        idUser : appointment.idUser,
        idDoctor: appointment.idDoctor,
        date: new moment(appointment.date+" "+appointment.hour),
        status: appointment.status,
        comments: appointment.comments
    });
}

export const getUpdateFormat = (appointment) =>{
    return({
        id: appointment.id,
        idUser : appointment.idUser,
        idDoctor: appointment.idDoctor,
        patientName: appointment.patientName,
        date: new moment(appointment.date+" "+appointment.hour),
        status: appointment.status,
        comments: appointment.comments
    });
}

export const setScheduleFormat = (date, minMin, minHour, maxMin, maxHour) => {
    let actDate = new moment(date+' '+minHour+":"+minMin);
    let endDate = new moment(date+' '+maxHour+":"+maxMin);
    return({
        idDoctor: idDoctor,
        attentionDate: date,
        startTime: actDate.format('HH:mm'),
        endTime: endDate.format('HH:mm')
    });
}

export const createFreeAppointments = (schedule) => {
    let appointments = [];
    let actDate = new moment(schedule.attentionDate+' '+schedule.startTime);
    let endDate = new moment(schedule.attentionDate+' '+schedule.endTime);
    for(actDate; actDate <= endDate; actDate.add(30, 'minutes')){
        appointments.push({ 
            id: appointments.length + 1,
            idUser : null,
            idDoctor: idDoctor,
            date: new moment(actDate),
            status: STATUS_FREE,
            comments: ''
        });
    }

    return appointments;
}