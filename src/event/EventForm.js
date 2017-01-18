import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import moment from 'moment';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      start_time: '',
      end_time: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
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
          defaultValue={this.state.title}
        />
      </FormGroup>
      <FormGroup controlId='description'>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          componentClass='textarea'
          placeholder="It\'s going to be so much fun!"
          defaultValue={this.state.description}
        />
      </FormGroup>
      <FormGroup controlId='start_time'>
        <ControlLabel>Start Time</ControlLabel>
        <FormControl
          type='text'
          placeholder='2017-12-13 15:30:00'
          defaultValue={this.state.start_time}
        />
      </FormGroup>
      <FormGroup controlId='end_time'>
        <ControlLabel>End Time</ControlLabel>
        <FormControl
          type='text'
          placeholder='2017-12-15 20:30:00'
          defaultValue={this.state.end_time}
        />
      </FormGroup>
      <Button bsStyle="primary" type="submit" value="Submit">Add Event</Button>
    </form>
  );
 }
}

export default EventForm;

