import React from 'react';
import { Container, Row, FormControl, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import CalendarToday from '@material-ui/icons/CalendarToday';
import moment from 'moment';

class PickerDay extends React.Component {

    setDateSelected = (e) => {
        this.props.setDateSelected(new moment(e.target.value));
    }

    render(){
        return(           
            <Container className="d-flex justify-content-end">
            <Row>
                <OverlayTrigger trigger="click" key='left' placement='left'
                    overlay = {
                        <Popover>
                            <Popover.Content>
                                <FormControl type="date" value={this.props.dateSelected.date.format('YYYY-MM-DD')} onChange={this.setDateSelected} />
                            </Popover.Content>
                        </Popover>
                    }>
                    <Button >
                        <CalendarToday/>
                    </Button>
                </OverlayTrigger>
            </Row>
            </Container>
        );
    }

}

export default PickerDay;