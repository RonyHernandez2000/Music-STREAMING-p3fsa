import React from 'react';
import { Container } from 'react-bootstrap';
import { firebase } from './Firebase/firebase-config';
import { authentication } from './Firebase/firebase-config';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=be4f66a30e1d4762b7b21785ca4555f8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login(){

    const signInWithGoogle=()=>{
        const provider = new GoogleAuthProvider();
       signInWithPopup(authentication, provider)
       .then((re) =>
    )}
return(
  
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight:"100vh"}}>

        <button onClick={signInWithGoogle} > Sign In with Google</button>

<a className="btn btn-success btn-lg" href={AUTH_URL}>Login with spotify</a>

    </Container>
)

}