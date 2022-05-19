import React, {useState} from 'react'
import './styles/Audioplayer.css';
import {IoPlayBack} from "react-icons/io5"
import {IoPlayForward} from "react-icons/io5"
import{IoPlay} from "react-icons/io5"
import{IoPauseSharp} from "react-icons/io5"
import { Button } from 'react-bootstrap';
const Audioplayer = () => {
  const  [isPlaying, SetisPlaying]= useState(false);

  const togglePlayPause =() => {
        SetisPlaying(!isPlaying);
  }

  return (
    <div className='audioPlayer'>
        <audio src='' preload='metadata'></audio>
        <button className='forwardBackward'>30<IoPlayBack/></button>
        <button onClick={togglePlayPause} className='playPause'>{isPlaying ? <IoPauseSharp/>:<IoPlay className='play'/>}</button>
        <button className='forwardBackward'> <IoPlayForward/>30 </button>
{/*current time*/}
    <div className='currentTime'>0:00</div>
    {/*progress bar*/}
    <div>
        <input type="range"/>
    </div>
    {/*duration*/}
    <div className='duration'>2:49</div>

    
    </div>
  )
}

export {Audioplayer}