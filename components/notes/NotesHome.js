import NotesList from "components/notes/NotesList";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import {
  getNotesDB,
  saveNoteDB,
  deleteNoteDB,
  updateNoteDB,
} from "utils/firebase";
import { Container } from "react-bootstrap";

export default function NotesHome({ paramSubject = "" }) {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  useEffect(() => {
    getNotesDB().then((result) => {
      if (result) setNotes(result);
    });
  }, []);

  const updateNoteStatus = (id, newstatus) => {
    updateNoteDB(id, newstatus);
    let updateNote = notes.find((note) => note.id == id);

    const newNotes = notes.filter((note) => note.id != id);
    let updatedNote = { ...updateNote, status: newstatus };
    //console.log("update note ", updatedNote)
    newNotes.push(updatedNote);
    setNotes(newNotes);
  };

  const addNote = (text, subject, status) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      subject: subject,
      date: date.toLocaleDateString(),
      status: status,
    };
    const newNotes = [...notes, newNote];
    saveNoteDB(newNote);
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    deleteNoteDB(id);
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  function handleSearchStatusChange(searchStatus) {
    setSearchStatus(searchStatus);
  }

  notes.sort((a, b) => (a.status > b.status ? 0 : -1));

  return (
    <Container fluid>
      <div className="row">
        <div className="col-1">
          <Sidebar />
        </div>

        <div className="col-11">
          <NotesList
            notes={notes
              .filter((note) => note.status.includes(searchStatus))
              .filter((note) => note.subject.includes(paramSubject))
              .filter((note) => note.text.includes(searchText))}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleSearch={setSearchText}
            handleStatusChange={updateNoteStatus}
            searchStatusChange={handleSearchStatusChange}
          />
        </div>
      </div>
    </Container>
  );
}
