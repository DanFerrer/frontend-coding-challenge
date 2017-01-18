import { Media, Col } from 'react-bootstrap';

const EventItem = (props) => {
  return (
      <Col md={4} sm={6}>
          <div className="event-item">
            <Media>
              <Media.Body>
                <Media.Heading>{props.item.title}</Media.Heading>
                <p>{props.item.startTime}</p>
                <p>{props.item.endTime}</p>
              </Media.Body>
            </Media>
          </div>
      </Col>
  );
};

export default EventItem;
