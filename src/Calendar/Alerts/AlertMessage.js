import React from 'react';
import { Alert } from 'react-bootstrap';

class AlertMessage extends React.Component {
    render(){
        console.log(this.props.alert);
        const color = this.props.alert.statusOk ? 'success': 'danger';
        return(
            <Alert show={this.props.alert.show} variant={color} dismissible>
                <p>{this.props.alert.message}</p>
            </Alert>
        );
    }
}

export default AlertMessage;