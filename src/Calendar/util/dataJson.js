import moment from 'moment';

export const dateSelect = new moment("2020-04-10");

export const newAppointments = [
    {
        id: 0,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T09:30:00"),
        patientName: '',
        comments: 'algo 0'
    }, {
        id: 1,
        idUser: 1,
        status: 'Pending',
        date: new moment("2020-04-10T10:00:00"),
        patientName: 'Naysha Chire',
        comments: 'algo 1'
    }, {
        id: 2,
        idUser: 2,
        status: 'Confirm',
        date: new moment("2020-04-10T10:30:00"),
        patientName: 'Jose Flores',
        comments: 'algo 2'
    }, {
        id: 3,
        idUser: 3,
        status: 'Confirm',
        date: new moment("2020-04-10T11:00:00"),
        patientName: 'Derk',
        comments: ''
    }, {
        id: 4,
        idUser: 4,
        status: 'Pending',
        date: new moment("2020-04-10T11:30:00"),
        patientName: 'Lia O',
        comments: ''
    }, {
        id: 5,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T17:00:00"),
        patientName: '',
        comments: ''
    }, {
        id: 6,
        idUser: 5,
        status: 'Pending',
        date: new moment("2020-04-10T17:30:00"),
        patientName: 'Saul Valenzuela',
        comments: 'algo 6'
    }, {
        id: 7,
        idUser: null,
        status: 'Free',
        date: new moment("2020-04-10T18:00:00"),
        patientName: '',
        comments: 'algo 7'
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
    [
        {
            id: 0,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-20T09:30:00"),
            patientName: '',
            comments: ''
        }, {
            id: 1,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-20T10:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 2,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-20T10:30:00"),
            patientName: '',
            comments: ''
        }, {
            id: 3,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-20T11:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 4,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-20T11:30:00"),
            patientName: '',
            comments: ''
        }, {
            id: 5,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-20T12:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 6,
            idUser: 5,
            status: 'Free',
            date: new moment("2020-04-21T12:30:00"),
            patientName: '',
            comments: ''
        }, {
            id: 7,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-21T13:30:00"),
            patientName: '',
            comments: ''
        }
    ], [
    ], [
    ], [
        {
            id: 8,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-22T09:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 9,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-22T11:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 10,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-22T11:30:00"),
            patientName: '',
            comments: ''
        }, {
            id: 11,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-22T12:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 12,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-22T13:00:00"),
            patientName: '',
            comments: ''
        }
    ], [
        {
            id: 13,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-24T10:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 14,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-24T13:00:00"),
            patientName: '',
            comments: ''
        }, {
            id: 15,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-24T13:30:00"),
            patientName: '',
            comments: ''
        }, {
            id: 16,
            idUser: null,
            status: 'Free',
            date: new moment("2020-04-24T14:00:00"),
            patientName: '',
            comments: ''
        }
    ]
];
