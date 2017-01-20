import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const EventSearch = (props) => {
  return (
    <FormGroup>
      <FormControl
        type="text"
        value={props.search}
        placeholder="Search events by title"
        onChange={props.onSearchChange}
      />
    </FormGroup>
  );
};

export default EventSearch;
