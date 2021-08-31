import classes from "components/notes/notes.module.css";
import { useState } from "react";
import { uploadBytes } from "@firebase/storage";
import { storage, ref, getDownloadURL, savePostDB } from "utils/firebase";
import { jeeSyllabus } from "data/data";
import { nanoid } from "nanoid";


export default function AddPost({newPostAdded}) {
  const [noteText, setNoteText] = useState("");
  const [subject, setSubject] = useState(jeeSyllabus[0].subject);
  const [subtopics,setSubtopics] = useState(jeeSyllabus[0].topics)
  const [subtopic, setSubtopic] = useState(jeeSyllabus[0].topics[0].name)
  const [image, setImage] = useState(null);
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleUpload()
      setNoteText("");
    }
  };

  const handleTopicChange = (event) => {
    setSubject(event.target.value);
    const selectedObj = jeeSyllabus.filter( syllabus => syllabus.subject == event.target.value)
    setSubtopics(selectedObj[0].topics)
    setSubtopic(selectedObj[0].topics[0].name)
  };

  const handleSubtopicChange = (event) => {
    setSubtopic(event.target.value)
  };

  function handleFile(event) {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  }

  function handleUpload() {


    const ref1 = ref(storage, `images/${image.name}`);
    //const task = storage.ref(`images/${image.name}`).put(image)
    uploadBytes(ref1, image).then((snapshot) => { console.log(snapshot)
    
        getDownloadURL(ref(storage, `images/${image.name}`))
        .then((url) => {
            const newPost = {
                uid: nanoid(),
                id: subject + subtopic,
                subject: subject,
                subtopic: subtopic,
                text: noteText,
                url: url
              }
            console.log('url11 is ', url)
            if(noteText) {
                console.log('saving')
                savePostDB(newPost).then((result) => {
                    newPostAdded(newPost)
                } );
                
            }
        })
        .catch((error) => {
          // Handle any errors
        });
    });

 }

  return (
    <div className={classes.notenew}>
      <textarea
        rows="8"
        cols="30"
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
          onChange={handleTopicChange}
        >
            {jeeSyllabus.map( syllabus => <option key={syllabus.subject} value={syllabus.subject}>{syllabus.subject}</option> )}
        </select>

        <select
          name="subtopic"
          id="subtopic"
          className={classes.save}
          onChange={handleSubtopicChange}
        >
            {subtopics.map( subtopic => <option key={subtopic.name} value={subtopic.name}>{subtopic.name}</option> )}
        </select>

        <input type="file" onChange={handleFile} />

        <button className={classes.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
