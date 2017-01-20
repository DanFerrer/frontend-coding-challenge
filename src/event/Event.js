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
      events: [],
      search: ''
    };

    this.addEvent = this.addEvent.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
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
    this.state.events.push(event);

    this.setState({
      events: this.state.events
    });
  }

  searchEventsByTitle() {
    return this.state.events.filter((event) => {
      return event.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
  }

  onSearchChange(ev) {
    this.setState({
      search: ev.target.value
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              <EventSearch search={this.state.search} onSearchChange={this.onSearchChange} />
              <EventForm addEvent={this.addEvent}/>
              <EventList events={this.searchEventsByTitle() || this.state.events}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Event;
