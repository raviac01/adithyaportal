import classes from "./notes.module.css";
import { useState } from "react";

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const [subject, setSubject] = useState("Physics");
  const [status, setStatus] = useState("Active");

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, subject, status);
      setNoteText("");
    }
  };

  const handleSelectionChange = (event) => {
    setSubject(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className={classes.notenew}>
      <div>
      <select           name="status"
          id="status"
          className={classes.save}
          onChange={handleStatusChange}
        >
          <option value="Active">Active</option>
          <option value="Complete">Complete</option>
        </select>
    </div>  
      <textarea
        rows="6"
        cols="16"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className={classes.notefooter}>
        <small>{characterLimit - noteText.length} Remaining</small>
        <select
          name="subject"
          id="subject"
          className={classes.save}
          onChange={handleSelectionChange}
        >
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Math">Math</option>
          <option value="General">General</option>
        </select>

        <button className={classes.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
