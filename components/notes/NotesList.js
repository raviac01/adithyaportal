import AddNote from "./AddNote";
import Note from "./Note";
import classes from "./notes.module.css";
import SearchNotes from "./SearchNotes";

export default function NotesList({ notes, handleAddNote, handleDeleteNote, handleSearch, handleStatusChange }) {
     
  return (
    <div className={classes.notescontainer}>
      <SearchNotes handleSearch={handleSearch}/>
      <div className={classes.noteslist}>
        {notes.map((note) => (
          <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} handleStatusChange={handleStatusChange}/>
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}
