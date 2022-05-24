import React,{Fragment,useState} from 'react'
import './styles/Upload.css'
import axios from 'axios'

import { getStorage, ref, uploadBytes } from "firebase/storage";

function Upload() {

    const[file ,setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [uploadedFile , setUploadedFile] = useState({});


    const readMp3 = (e) => {
        const file = e.target.files[0];
        const storage = getStorage();
        const  mp3 = ref(storage, '.mp3');
        uploadBytes(mp3, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(file)});
    }


    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };
    const onSubmit =  async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

    try {
        const res = await axios.post('/upload',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const {fileName, filePath} = res.data;

        setUploadedFile({fileName, filePath});
    } catch(err){
        if(err.response.status === 500){
        console.log('There was a problem with the server');
    }    else {
        console.log(err.response.data.msg);
    }
    }
    }

  return (
    <Fragment>
        <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
        <input type="file"  accept=".mp3" className="custom-file-input" onChange={onChange && readMp3 }/>
        <label className="custom-file-label" htmlFor='customFile'>{filename}
        </label>
    </div>
<input type='submit' value="upload" className='btn btn-warning btn-block mt-4'/>

        </form>
    </Fragment>

  )
}

export default Upload