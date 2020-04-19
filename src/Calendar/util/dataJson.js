import moment from 'moment';

export const dateSelect = new moment("2020-04-10");

export const newAppointments = [
    {
        id: 0,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T09:30:00"),
        patientName: ''
    }, {
        id: 1,
        idUser: 1,
        status: 'Pending',
        date: new moment("2020-04-10T10:00:00"),
        patientName: 'Naysha Chire',
    }, {
        id: 2,
        idUser: 2,
        status: 'Confirm',
        date: new moment("2020-04-10T10:30:00"),
        patientName: 'Jose Flores',
    }, {
        id: 3,
        idUser: 3,
        status: 'Confirm',
        date: new moment("2020-04-10T11:00:00"),
        patientName: 'Derk',
    }, {
        id: 4,
        idUser: 4,
        status: 'Pending',
        date: new moment("2020-04-10T11:30:00"),
        patientName: 'Lia O',
    }, {
        id: 5,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T17:00:00"),
        patientName: '',
    }, {
        id: 6,
        idUser: 5,
        status: 'Pending',
        date: new moment("2020-04-10T17:30:00"),
        patientName: 'Saul Valenzuela',
    }, {
        id: 7,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T18:00:00"),
        patientName: '',
    }
];

export const schedules = [
    {
        id: 0,
        date : new Date("April 10, 2020"),
        startHour: new Date("April 10, 2020 09:00:00"),
        endHour: new Date("April 10, 2020 15:00:00")
    }, {
        id: 1,
        date : new Date("April 11, 2020"),
        startHour: new Date("April 11, 2020 12:00:00"),
        endHour: new Date("April 11, 2020 19:00:00")
    }
];

export const newFreeAppointments = [
    {
        id: 0,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T08:30:00"),
        patientName: ''
    }, {
        id: 1,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T09:00:00"),
        patientName: '',
    }, {
        id: 2,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T09:30:00"),
        patientName: '',
    }, {
        id: 3,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T10:00:00"),
        patientName: '',
    }, {
        id: 4,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T10:30:00"),
        patientName: '',
    }, {
        id: 5,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T11:00:00"),
        patientName: '',
    }, {
        id: 6,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T11:30:00"),
        patientName: '',
    }, {
        id: 7,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T14:00:00"),
        patientName: '',
    }
];