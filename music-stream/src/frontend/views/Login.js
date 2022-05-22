import React from 'react';
import { Container } from 'react-bootstrap';
import { authentication } from './Firebase/firebase-config';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { loginEndpoint } from './spotify';
import './styles/Login.css'



export default function Login(){

    const signInWithGoogle=()=>{
        const provider = new GoogleAuthProvider();
       signInWithPopup(authentication, provider)
       .then((re) =>{
           console.log(re);
            
       })
       .catch((err) =>{
        console.log(err)
       })
    }

return(

<div className="login">
        
        <a   className="btn btn-success btn-lg" href={loginEndpoint}> Sign In With Spotify</a>
        <br/>
   <button className="btn btn-danger btn-lg btn-block" onClick={signInWithGoogle} > Sign In with Google</button>

    </div> 
    

    
)

}