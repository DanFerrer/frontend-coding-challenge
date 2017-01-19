import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import EventItem from './EventItem';

const EventList = ({events}) => {
  return (
    <div className="events">
      <Grid>
        <Row>
          {events.map(event => <EventItem event={event} key={event.id}/>)}
        </Row>
      </Grid>
    </div>
  );
};

export default EventList;
