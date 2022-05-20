import React from "react";
import Header from "./Header";
import { Audioplayer } from './Audioplayer';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import useAuth from "./useAuth";



function Home({code}){
    const accessToken = useAuth(code)
    return(
        
<div>
<h1>home</h1>
</div>

    )
}

export default Home