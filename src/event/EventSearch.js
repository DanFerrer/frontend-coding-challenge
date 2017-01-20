import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

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
    return (
      <FormGroup>
        <FormControl
          type="text"
          value={this.state.search}
          placeholder="Search events by title"
          onChange={this.onSearchChange}
        />
      </FormGroup>
    );
  }
}

export default EventSearch;
