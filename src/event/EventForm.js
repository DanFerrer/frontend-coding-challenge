import { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import moment from 'moment';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      startTime: '',
      endTime: ''
    };
  }

  onSubmit(ev) {
    ev.preventDefault();

    const title = this.state.title;
    const startTime = moment(this.state.startTime).format('YYYY-MM-DD HH:mm:ss');
    const endTime = moment(this.state.endTime).format('YYYY-MM-DD HH:mm:ss');

    const newEvent = {
      title,
      startTime,
      endTime
    };

    this.props.addEvent(newEvent);

    this.setState = {
      title: '',
      startTime: '',
      endTime: ''
    };
 }

 render() {
  return(
    <form onSubmit={this.onSubmit}>
      <FormGroup controlId='title'>
        <ControlLabel>Event Title</ControlLabel>
        <FormControl
          type='text'
          placeholder='Happy Birthday!'
          value={this.state.title}
        />
      </FormGroup>
      <FormGroup controlId='startTime'>
        <ControlLabel>Start Time</ControlLabel>
        <FormControl
          type='text'
          placeholder='2017-12-13 15:30:00'
          value={this.state.startTime}
        />
      </FormGroup>
      <FormGroup controlId='endTime'>
        <ControlLabel>End Time</ControlLabel>
        <FormControl
          type='text'
          placeholder='2017-12-15 20:30:00'
          value={this.state.endTime}
        />
      </FormGroup>
      <Button bsStyle="primary" type="submit" value="Submit">Add Event</Button>
    </form>
  );
 }
}

export default EventForm;

