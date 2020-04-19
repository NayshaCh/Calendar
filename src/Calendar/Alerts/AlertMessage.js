import React from 'react';
import { Alert } from 'react-bootstrap';

class AlertMessage extends React.Component {

    render(){
        const color = this.props.alert.statusOk ? 'success': 'danger';
        return(
            <div className={this.props.alert.show? "alert_Calendar visible" : "alert_Calendar invisble"} >
                <Alert show={this.props.alert.show} variant={color} dismissible>
                    {this.props.alert.message}
                </Alert>
            </div>
        );
    }
}

export default AlertMessage;