import React from 'react';
import { Container } from 'react-bootstrap';
import { authentication } from './Firebase/firebase-config';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';



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
  
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight:"100vh"}}>

        <button onClick={signInWithGoogle} > Sign In with Google</button>


    </Container>
)

}