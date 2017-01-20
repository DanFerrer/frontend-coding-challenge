import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import moment from 'moment';

const EventItem = (props) => {
  return (
   <div className="event-item">
      <PanelGroup accordion>
        <Panel header={props.event.title}>
          <h2>Description:</h2>
          <p>{props.event.description || 'No description available'}</p>
          <h2>Start:</h2>
          <p>{moment(props.event.start_time).format('YYYY-MM-DD HH:mm:ss')}</p>
          <h2>End:</h2>
          <p>{moment(props.event.end_time).format('YYYY-MM-DD HH:mm:ss')}</p>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default EventItem;
