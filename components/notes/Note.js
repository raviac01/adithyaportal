import {MdDeleteForever} from 'react-icons/md'
import classes from './notes.module.css'

export default function Note({note, handleDeleteNote}) {

    function handleDeleteClick() {
        handleDeleteNote(note.id)
    }

    return (
        <div className={classes.note} >
            <span> {note.text} </span>
            <div className={classes.notefooter}>
                <small>{note.date}</small>
                <small> {note.subject} </small>
                <MdDeleteForever onClick={handleDeleteClick} className={classes.deleteicon} size='1.3em' />
            </div>
        </div>
    )
}