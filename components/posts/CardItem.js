import { Card } from 'react-bootstrap';
import Link from 'next/link'

const CardItem = ({subject, subtopic, text, url}) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
          <div>
            <Card.Title className="font-weight-bold mb-1">{subject}</Card.Title>
          </div>
        </Card.Header>
        <div className="view overlay">
         <img src={url} alt='An image showing Adithya' width={200} height={200} />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{subtopic}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </div>
      <Link href={`/blogs/${subtopic}`} >
          <a className="card-button">
            Read More
        </a>
      </Link>
    </Card>
  )
}

export default CardItem;