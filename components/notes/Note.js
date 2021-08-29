import { MdDeleteForever } from "react-icons/md";
import classes from "./notes.module.css";

export default function Note({ note, handleDeleteNote, handleStatusChange }) {
  
    function handleDeleteClick() {
    handleDeleteNote(note.id);
  }

  function handleStatusChangeEvent(event) {
      console.log('passing status ', event.target.value)
     handleStatusChange(note.id, event.target.value)
  }

  return (
    <div className={classes.note}>
      <span> {note.text} </span>
      <div className={classes.notefooter}>
        <small>{note.date}</small>
        <small> {note.subject} </small>
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
        <MdDeleteForever
          onClick={handleDeleteClick}
          className={classes.deleteicon}
          size="1.3em"
        />
      </div>
    </div>
  );
}
