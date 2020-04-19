import React from 'react';
import { Container, Row, Col, FormCheck } from 'react-bootstrap';
import { STATUS_CONFIRM, STATUS_FREE, STATUS_PENDING } from '../../Appointments/Config';

class StatusBar extends React.Component {

    setStatusConfirm = (e) => {
        this.props.setStatus(
            this.props.status.free,
            this.props.status.pending,
            e.target.checked
        );
    }

    setStatusPending = (e) => {
        this.props.setStatus(
            this.props.status.free,
            e.target.checked,
            this.props.status.confirm
        );
    }

    setStatusFree = (e) => {
        this.props.setStatus(
            e.target.checked,
            this.props.status.pending,
            this.props.status.confirm
        );
    }

    render(){
        return(
            <Container>
            <Row>
                <Col>
                    <FormCheck type="checkbox" label={STATUS_CONFIRM} checked={this.props.status.confirm} onChange={this.setStatusConfirm}/>
                </Col>
                <Col>
                    <FormCheck type="checkbox" label={STATUS_PENDING} checked={this.props.status.pending} onChange={this.setStatusPending}/>
                </Col>
                <Col>
                    <FormCheck type="checkbox" label={STATUS_FREE} checked={this.props.status.free} onChange={this.setStatusFree}/>
                </Col>
            </Row>
            </Container>
        );
    }

}

export default StatusBar;