import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC5vtujRiTT533u_sh93eBq7IiYnP9w88A",
  authDomain: "jeenotes-c18d9.firebaseapp.com",
  databaseURL: "https://jeenotes-c18d9-default-rtdb.firebaseio.com",
  projectId: "jeenotes-c18d9",
  storageBucket: "jeenotes-c18d9.appspot.com",
  messagingSenderId: "710206791298",
  appId: "1:710206791298:web:d42dd80e04d4c76617de9b",
};

if(!firebase.apps.lengh) {
    firebase.initializeApp(config);
}

export const firestore = firebase.firestore();

export default function Login() {

    return (
        <div>
             Hi   
        </div>
    )
}