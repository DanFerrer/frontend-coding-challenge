import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const EventSort = (props) => {
  return (
    <FormGroup>
      <ControlLabel>Sort events</ControlLabel>
      <FormControl componentClass="select" onChange={props.onSortChange}>
        <option>Select a filter</option>
        <option value={'start_time'}>Start Time</option>
        <option value={'title'}>Title</option>
      </FormControl>
    </FormGroup>
  );
};

export default EventSort;
