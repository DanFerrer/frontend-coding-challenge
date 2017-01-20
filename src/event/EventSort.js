import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const EventSort = (props) => {
  return (
    <FormGroup>
      <ControlLabel>Sort events</ControlLabel>
      <FormControl componentClass="select" defaultValue={props.filters.startTime}>
        <option value={props.filters.startTime}>Start Time</option>
        <option value={props.filters.title}>Title</option>
      </FormControl>
    </FormGroup>
  );
};

export default EventSort;
