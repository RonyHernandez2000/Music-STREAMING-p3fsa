import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav'
import { Navbar } from "react-bootstrap";
import './styles/Header.css'
import Home from "./Home";
import { Link } from "react-router-dom";
import apiClient from "./spotify"


function Header (){
const [image,setImage]=useState("http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"

);
useEffect(() => {
  apiClient.get("me").then(response => {setImage(response.data.images[0].url);});
}, [])

 
    return(
      <div className="Nav-boarder">
        
        
        <ul>
         
        <img src={image} className="profile-image" alt="profile"/> 
<nav>
  <a href="/">Home</a>
  <a href="/library">Library</a>
  <a href="/upload">Upload</a>
  <a href="#">Portefolio</a>
  <a href="/login">Login</a>
  <div class="animation start-home"></div>
</nav>
        </ul>
    </div>
     
    )
}

export default Header