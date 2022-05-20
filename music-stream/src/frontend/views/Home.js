import React from "react";
import Header from "./Header";
import { Audioplayer } from './Audioplayer';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';



function Home(){
    
    return(
        <BrowserRouter>
        <Header/>
        <Audioplayer/>
<div>
<h1>home</h1>
</div>
</BrowserRouter>
    )
}

export default Home