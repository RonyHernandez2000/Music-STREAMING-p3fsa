import React from 'react';
import { Container } from 'react-bootstrap';
import { authentication } from './Firebase/firebase-config';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { loginEndpoint } from './spotify';



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
  
    <div>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.Png"></img>
        <a href={loginEndpoint}> Sign In With Spotify</a>
   <button onClick={signInWithGoogle} > Sign In with Google</button>

    </div>

     

    
)

}