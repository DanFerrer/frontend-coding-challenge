import React, { Component } from 'react';
import {Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import moment from 'moment';

import guid from '../shared/guid';

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

    this.validateTitle = this.validateTitle.bind(this);
    this.validateStartTime = this.validateStartTime.bind(this);
    this.validateEndTime = this.validateEndTime.bind(this);
  }

  validateTitle() {
    return this.state.title.length ? 'success' : 'error';
  }

  validateStartTime() {
    if (moment(this.state.start_time,'YYYY-MM-DD HH:mm:ss').isValid()) {
      return 'success';
    } else {
      return 'error';
    }
  }

  validateEndTime() {
    if (moment(this.state.end_time, 'YYYY-MM-DD HH:mm:ss').isValid() && moment(this.state.start_time).valueOf() < moment(this.state.end_time).valueOf()) {
      return 'success';
    } else {
      return 'error';
    }
  }

  formDisabled() {
    if (this.validateTitle() === 'error' || this.validateStartTime() === 'error' || this.validateEndTime() === 'error') {
      return true;
    } else {
      return false;
    }
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

    const newEvent = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      start_time: this.state.start_time,
      end_time: this.state.end_time
    };

    this.props.addEvent(newEvent);

    this.setState({
      id: guid(),
      title: '',
      description: '',
      start_time: '',
      end_time: ''
    });
 }

  render() {
    let isDisabled = this.formDisabled();

    return(
        <Col md={6}>
          <form onSubmit={this.onSubmit}>
            <FormGroup controlId='title' validationState={this.validateTitle()}>
              <ControlLabel>Event Title</ControlLabel>
              <FormControl
                type='text'
                placeholder='Happy Birthday!'
                value={this.state.title}
                onChange={this.onTitleChange}
              />
              <FormControl.Feedback />
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
            <FormGroup controlId='start_time' validationState={this.validateStartTime()}>
              <ControlLabel>Start Time</ControlLabel>
              <FormControl
                type='text'
                placeholder='2017-12-13 15:30:00'
                value={this.state.start_time}
                onChange={this.onStartTimeChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId='end_time' validationState={this.validateEndTime()}>
              <ControlLabel>End Time</ControlLabel>
              <FormControl
                type='text'
                placeholder='2017-12-15 20:30:00'
                value={this.state.end_time}
                onChange={this.onEndTimeChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button bsStyle="primary" type="submit" value="Submit" disabled={isDisabled}>Add Event</Button>
          </form>
       </Col>
    );
  }
}

export default EventForm;

