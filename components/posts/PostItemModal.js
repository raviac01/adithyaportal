import { Modal, Card } from "react-bootstrap";

const PostItemModal = ({
  subject,
  subtopic,
  text,
  url,
  show,
  setShowState,
}) => {
  return (
    <Modal show={show} size="lg" onHide={() => setShowState(false)}>
      <Modal.Header>
        <div>
          <Card.Title className="font-weight-bold mb-1">{subject}</Card.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <img
          src={url}
          alt="An image showing Adithya"
          width={700}
          height={700}
        />

        <Card.Title className="card-main-title">{subtopic}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Modal.Body>
    </Modal>
  );
};

export default PostItemModal;
