import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calendar/appointmentStyle.css'
import Calendar from './Calendar/Calendar'
import SimpleCalendar from './SimpleCalendar/SimpleCalendar';

class App extends React.Component {

  render(){
    return (
      <SimpleCalendar />
    );
  }
}

export default App;
