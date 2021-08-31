import { uploadBytes } from "@firebase/storage";
import { useState } from "react";
import { storage, ref, getDownloadURL } from "utils/firebase";

export default function FileUpload(params) {
  const [image, setImage] = useState(null);
    const [imgurl, setImgUrl] = useState("")

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
            console.log('url is ', url)
            setImgUrl(url)
        })
        .catch((error) => {
          // Handle any errors
        });
    });

 }

  return (
    <div>
      <div>
        File FileUpload
        <input type="file" onChange={handleFile} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div>
        <img src={imgurl} />
      </div>
    </div>
  );
}
