import { Card } from 'react-bootstrap';

const CardListItem = ({subject, subtopic, text}) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
            <div>
              <Card.Text className="card-date">{subject}</Card.Text>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{subtopic}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </div>
      <a href="#" className="card-button">
        Read More
      </a>
    </Card>
  )
}

export default CardListItem;