import { MdDeleteForever } from "react-icons/md";
import classes from "./notes.module.css";
import { Col } from "react-bootstrap";

export default function Note({ note, handleDeleteNote, handleStatusChange }) {
  function handleDeleteClick() {
    handleDeleteNote(note.id);
  }

  function handleStatusChangeEvent(event) {
    handleStatusChange(note.id, event.target.value);
  }

  return (
    <Col>
      <div className={classes.note}>
        <div>
          <select
            name="status"
            id="status"
            className={classes.save}
            onChange={handleStatusChangeEvent}
            value={note.status}
          >
            <option value="Active">Active</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        <span> {note.text} </span>
        <div className={classes.notefooter}>
          <small>{note.date}</small>
          <small> {note.subject} </small>

          <MdDeleteForever
            onClick={handleDeleteClick}
            className={classes.deleteicon}
            size="1.3em"
          />
        </div>
      </div>
    </Col>
  );
}
