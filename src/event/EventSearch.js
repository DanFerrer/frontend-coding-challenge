import React from 'react';
import { Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

const EventSearch = (props) => {
  return (
    <Col md={6}>
      <ControlLabel>Search Events</ControlLabel>
      <FormGroup>
        <FormControl
          type="text"
          value={props.search}
          placeholder="Search events by title"
          onChange={props.onSearchChange}
        />
      </FormGroup>
    </Col>
  );
};

export default EventSearch;
