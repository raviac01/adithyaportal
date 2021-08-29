import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, runTransaction } from 'firebase/firestore/lite';

const config = {
  apiKey: "AIzaSyC5vtujRiTT533u_sh93eBq7IiYnP9w88A",
  authDomain: "jeenotes-c18d9.firebaseapp.com",
  databaseURL: "https://jeenotes-c18d9-default-rtdb.firebaseio.com",
  projectId: "jeenotes-c18d9",
  storageBucket: "jeenotes-c18d9.appspot.com",
  messagingSenderId: "710206791298",
  appId: "1:710206791298:web:d42dd80e04d4c76617de9b",
};

const app = initializeApp(config);

const db = getFirestore(app)
const col = collection(db, '/notes');

const saveNoteDB =  async (note) => {
    if(note) {
        await setDoc(doc(db, 'notes', note.id), note)
    }
}

const getNotesDB =  async () => {
    const docsSnapshot = await getDocs(col);
     //docsSnapshot.docs.forEach(doc => console.log(doc.data()));
     const docsData = docsSnapshot.docs.map(doc => doc.data());
     return docsData
}

const deleteNoteDB = async (id) => {
    if ( id ) {
        await deleteDoc(doc(db, 'notes', id))
    }

}

const updateNoteDB = async (id, newstatus) => {
    if( id ) {
        const sfDocRef = doc(db, "notes", id);
        try {
            await runTransaction(db, async (transaction) => {
              const sfDoc = await transaction.get(sfDocRef);
              if (!sfDoc.exists()) {
                throw "Document does not exist!";
              }
          
              //const newPopulation = sfDoc.data().population + 1;
              transaction.update(sfDocRef, { status: newstatus });
            });
            console.log("Transaction successfully committed!");
          } catch (e) {
            console.log("Transaction failed: ", e);
          }
    }
}

export { saveNoteDB, getNotesDB, deleteNoteDB, updateNoteDB }
