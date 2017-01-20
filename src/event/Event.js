import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import EventSearch from './EventSearch';
import EventForm from './EventForm';
import EventList from './EventList';

import token from '../shared/apiToken';
import 'whatwg-fetch';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.addEvent = this.addEvent.bind(this);
  }

  componentDidMount() {
    this.getEvents(token)
      .then(response => response.json())
      .then(data => this.setState({ events: data.results }))
      .catch(err => console.log(err));
  }

  getEvents(token) {
    return fetch('https://api.eventable.com/v1/events/?format=json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${token}`
      },
      credentials: 'same-origin'
    });
  }

  addEvent(event) {
    if (event) {
      console.log(event);
      this.state.events.push(event);

      this.setState({
        events: this.state.events
      });
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              <EventSearch />
              <EventForm addEvent={this.addEvent}/>
              <EventList events={this.state.events}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Event;
