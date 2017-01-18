import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';

const EventItem = ({event}) => {
  return (
   <div className="event-item">
      <Accordion>
        <Panel bsClass="primary" header={event.title}>
          <h2>Description:</h2>
          <p>{event.description || 'No description available'}</p>
          <h2>Start:</h2>
          <p>{event.start_time}</p>
          <h2>End:</h2>
          <p>{event.end_time}</p>
        </Panel>
      </Accordion>
    </div>
  );
};

export default EventItem;
