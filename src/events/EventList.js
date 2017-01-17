import { Component } from 'react';
import creds from '../creds.js';
import 'whatwg-fetch';

class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.authenticate().then((authResponse) => {
      if (authResponse.token) {
        this.getEvents(authResponse.token) .then((eventsResponse) => {
          this.setState({ events: eventsResponse.results });
        }, (error) => {
          throw new Error(error.message);
        });
      }
    }, (error) => {
      throw new Error(error.message);
    });
  }

  authenticate() {
    return fetch('https://api.eventable.com/v1/token-auth/', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: creds
    });
  }

  getEvents(token) {
    return fetch('https://api.eventable.com/v1/events/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${token}`
      },
      credentials: 'same-origin'
    });
  }
}

export default EventList;
