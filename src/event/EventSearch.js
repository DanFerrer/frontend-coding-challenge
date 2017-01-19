import React, { Component } from 'react';

class EventSearch extends Component {
  constructor() {
    super();

    this.state ={
      search: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(ev) {
    this.setState({
      search: ev.target.value
    });
  }

  render() {
    return;
  }
}

export default EventSearch;
