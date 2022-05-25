import React from 'react'
import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./Firebase/firebase-config";



  
function Library() {
  const [mp3Upload, setMp3Upload] = useState(null);
  const [mp3Urls, setMp3Urls] = useState([]);

  const mp3ListRef = ref(storage, "mp3/");
  const uploadFile = () => {
    if (mp3Upload == null) return;
    const mp3Ref = ref(storage, `mp3/${mp3Upload.name }`);
    uploadBytes(mp3Ref, mp3Upload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setMp3Urls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(mp3ListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setMp3Urls((prev) => [...prev, url]);
          console.log(url)
        });
      });
    });
  }, []);

  return (
    <div>
      
      <h1>Library</h1>
      {mp3Urls.map((url) => {
        return   <video controls autoplay name="media"  > <source src={url} type="audio/mpeg"/></video> ;
      })}
    </div>
  )
}

export default Library