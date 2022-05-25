// import React,{Fragment,useState, useEffect} from 'react'
// import './styles/Upload.css'
// import axios from 'axios'
// import Mp3DataService from './services/mp3.service';
// import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import {v4} from "uuid"
// import { storage } from './Firebase/firebase-config';

// function Upload() {

//     const[file ,setFile] = useState('')
//     const [filename, setFilename] = useState('Choose File')
//     const [uploadedFile , setUploadedFile] = useState({});
//     const [name , setName] = useState({});
//     const [size , setSize] = useState({});
//     const [type , setType] = useState({});
//     const [mp3List , setMP3List] = useState([]);

//     const mp3ListRef = ref(storage, "mp3/")

//     const readMp3 =  async (e) => {
//         const file = e.target.files[0];
//         const storage = getStorage();
//         const  mp3 = ref(storage, `mp3/${file.name }`);
//          uploadBytes(mp3, file).then((snapshot) => {
//              getDownloadURL(snapshot.ref).then((url) => {
//                 setMP3List((prev) => [...prev, url])
//              })
           
//         console.log(file)});
//     //     const newMp3 ={
//     //         name,
//     //         type,
//     //         name :(file.name),
//     //         type:(file.type),
//     //          size:(file.size)
            
//     //     }
//     // console.log(newMp3)
//     console.log(file.name)
//     console.log(file.size)
//     console.log(file.type)
//     }
    
//    // try{
//         //     await Mp3DataService.addMp3(newMp3);
//         //     console.log('mp3 added')
//         // } catch(err){
//         //     console.log(err)

//         // }
//         // setName("")
//         // setSize()
//         // setType("")
    


//     // const onChange = e => {
//     //     setFile(e.target.files[0]);
//     //     setFilename(e.target.files[0].name);
        

//     // };
//     // const onSubmit =  async e => {
//     //     e.preventDefault();
//     //     const formData = new FormData();
//     //      formData.append('name', name);
//     //       formData.append('size', size);
//     //      formData.append('type', type);
//     //     formData.append('mp3File', filename);
        
       
//     // try {
//     //     const res = await axios.post('/upload',formData,{
//     //         headers: {
//     //             'Content-Type': 'multipart/form-data'
//     //         }
//     //     });
//     //     const {fileName, filePath} = res.data;

//     //     setUploadedFile({fileName, filePath});
//     // } catch(err){
//     //     if(err.response.status === 500){
//     //     console.log('There was a problem with the server');
//     // }    else {
//     //     console.log(err.response.data.msg);
//     // }
//     // }
//     // }

//     useEffect(() => {

//         listAll(mp3ListRef).then((response) => {
//             response.items.forEach((item) =>{
//                 getDownloadURL(item).then((url) =>{
//                     setMP3List((prev) => [...prev, url])
                    
//                 });
//             }
            
//             )
//         }, []);

//   return (
    

//   )
// })}

// export default Upload

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


function Upload() {
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
    <form   encType="multipart/form-data">
         
        
   
    <div class="mb-4">
  <label for="formFile" className="form-label"></label>
  <input type="file" filename="mp3File" accept=".mp3" className="form-control"  id="formFile" onChange={ (event) => {
          setMp3Upload(event.target.files[0]);
        } }/>
</div>
<input  type='submit' onClick={uploadFile} value="upload" className='btn btn-warning btn-block mt-4'/>
        {mp3Urls.map((url) => {
            return <video controls autoplay name="media"  > <source src={url} type="audio/mpeg"/></video> 
        })}
        </form>
   
  );}

  export default Upload;


       