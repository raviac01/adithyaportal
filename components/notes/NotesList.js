import AddNote from "./AddNote";
import Note from "./Note";
import SearchNotes from "./SearchNotes";
import { Container, Row, Col } from "react-bootstrap";

export default function NotesList({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleSearch,
  handleStatusChange,
  searchStatusChange,
}) {
  return (
    <Container fluid>
      <SearchNotes
        handleSearch={handleSearch}
        searchStatusChange={searchStatusChange}
      />
      <Row>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            handleDeleteNote={handleDeleteNote}
            handleStatusChange={handleStatusChange}
          />
        ))}
        <Col>
          <AddNote handleAddNote={handleAddNote} />
        </Col>
      </Row>
    </Container>
  );
}
