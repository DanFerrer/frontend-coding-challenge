import React from 'react';
import { Col } from 'react-bootstrap';
import EventItem from './EventItem';

const EventList = ({events}) => {
  return (
    <div className="events">
      <Col md={6}>
        {events.map(event => <EventItem event={event} key={event.id}/>)}
      </Col>
    </div>
  );
};

export default EventList;
