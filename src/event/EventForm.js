import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import moment from 'moment';
import guid from '../shared/guid'

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: guid(),
      title: '',
      description: '',
      start_time: '',
      end_time: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescripitonChange = this.onDescripitonChange.bind(this);
  }

  onStartTimeChange(ev) {
    this.setState({start_time: ev.currentTarget.value});
  }

   onEndTimeChange(ev) {
    this.setState({end_time: ev.currentTarget.value});
  }

   onTitleChange(ev) {
    this.setState({title: ev.currentTarget.value});
  }

  onDescripitonChange(ev) {
    this.setState({description: ev.currentTarget.value});
  }

  onSubmit(ev) {
    ev.preventDefault();

    const title = this.state.title;
    const description = this.state.description;
    const startTime = moment(this.state.start_time).format('YYYY-MM-DD HH:mm:ss');
    const endTime = moment(this.state.end_time).format('YYYY-MM-DD HH:mm:ss');

    const newEvent = {
      title,
      description,
      startTime,
      endTime
    };

    this.props.addEvent(newEvent);

    this.setState = {
      id: ''
      title: '',
      description: '',
      start_time: '',
      end_time: ''
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
          onChange={this.onTitleChange}
        />
      </FormGroup>
      <FormGroup controlId='description'>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          componentClass='textarea'
          placeholder="It\'s going to be so much fun!"
          value={this.state.description}
          onChange={this.onDescripitonChange}
        />
      </FormGroup>
      <FormGroup controlId='start_time'>
        <ControlLabel>Start Time</ControlLabel>
        <FormControl
          type='text'
          placeholder='2017-12-13 15:30:00'
          value={this.state.start_time}
          onChange={this.onStartTimeChange}
        />
      </FormGroup>
      <FormGroup controlId='end_time'>
        <ControlLabel>End Time</ControlLabel>
        <FormControl
          type='text'
          placeholder='2017-12-15 20:30:00'
          value={this.state.end_time}
          onChange={this.onEndTimeChange}
        />
      </FormGroup>
      <Button bsStyle="primary" type="submit" value="Submit">Add Event</Button>
    </form>
  );
 }
}

export default EventForm;

