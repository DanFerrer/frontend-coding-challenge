import { Grid, Row } from 'react-bootstrap';

const EventList = ({ events }) => {
  return (
    <div className="events">
      <Grid>
        <Row>
          { events.map((event) => <EventItem item={event}/> )}
        </Row>
      </Grid>
    </div>
  );
};

export default EventList;
