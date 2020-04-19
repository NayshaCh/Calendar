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
            patientName: appointment.patientName
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
            
        }
    );
}

export const newAppointmentData = () => {
    return (
        {
            id: -1,
            status: STATUS_FREE,
            date: new moment(),
            title: 'Appointment ' + STATUS_FREE
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
            idUser : appointment.idUser,
            idDoctor: idDoctor,
            date: day,
            hour: hour + ':' + min,
            status: appointment.status,
            comments: appointment.comments
        }
    });
}

export const setAddFormat = (appointment, day, hour, min) => {
    "localhos.../id - PUT" 
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