import NotesList from "components/notes/NotesList";
import Sidebar from "components/ui/Sidebar";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getNotesDB, saveNoteDB, deleteNoteDB } from "utils/firebase";
import classes from './notes.module.css'

export default function NotesHome({paramSubject=''}) {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log('passed subject is ', paramSubject)


  useEffect(() => {
    getNotesDB().then((result) => {
      if (result) setNotes(result);
    });
    /*const savedNotes = JSON.parse(localStorage.getItem('notes-array'))
      if( savedNotes) {
        setNotes(savedNotes)
      }*/
  }, []);

  //useEffect(() => {
  //localStorage.setItem('notes-array', JSON.stringify(notes))
  //}, [notes])

  const addNote = (text, subject) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      subject: subject,
      date: date.toLocaleDateString(),
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

  return (
    <div className={classes.noteshomecontainer}>
      <Sidebar />
      <NotesList
        notes={notes.filter((note) => note.subject.includes(paramSubject)).filter((note) => note.text.includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleSearch={setSearchText}
      />
    </div>
  );
}
