import { MdDeleteForever } from "react-icons/md";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import  PostItemModal from "./PostItemModal";
import classes from "components/notes/notes.module.css";

const CardListItem = ({
  uid,
  subject,
  subtopic,
  text,
  url,
  handleDeletePost,
}) => {
  const [lgShow, setLgShow] = useState(false);

  function handleDeleteClick() {
    handleDeletePost(uid);
  }

  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <div>
          <Card.Title className="font-weight-bold mb-1">{subject}</Card.Title>
          </div>

          <MdDeleteForever
            onClick={handleDeleteClick}
            className={classes.deleteicon}
            size="1.3em"
          />
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{subtopic}</Card.Title>
          <Card.Text>{text}</Card.Text>

        </Card.Body>
      </div>
      <PostItemModal
        subject={subject}
        subtopic={subtopic}
        text={text}
        url={url}
        show={lgShow}
        setShowState={setLgShow}
      />
      <Button className="card-button" onClick={() => setLgShow(true)}>
        Read More
      </Button>
    </Card>
  );
};

export default CardListItem;
