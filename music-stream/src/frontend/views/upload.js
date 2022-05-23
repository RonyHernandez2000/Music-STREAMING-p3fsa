import React,{Fragment,useState} from 'react'
import './styles/Upload.css'
import axios from 'axios'



function Upload() {

    const[file ,setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [uploadedFile , setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };
    const onSubmit =  async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

    try {
        const res = await axios.post('/uploads',formData,{
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
        <input type="file" className="custom-file-input" onChange={onChange}/>
        <label className="custom-file-label" htmlFor='customFile'>{filename}
        </label>
    </div>
<input type='submit' value="upload" className='btn btn-warning btn-block mt-4'/>

        </form>
    </Fragment>

  )
}

export default Upload