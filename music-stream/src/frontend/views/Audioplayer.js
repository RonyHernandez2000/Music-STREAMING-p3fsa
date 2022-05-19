import React, {useState, useRef} from 'react'
import './styles/Audioplayer.css';
import {IoPlayBack} from "react-icons/io5"
import {IoPlayForward} from "react-icons/io5"
import{IoPlay} from "react-icons/io5"
import{IoPauseSharp} from "react-icons/io5"

const Audioplayer = () => {
  const  [isPlaying, SetIsPlaying]= useState(false);

  //references
  const audioPlayer = useRef();

  const togglePlayPause =() => {
    const prevValue = isPlaying;
      SetIsPlaying(prevValue=> !prevValue);
        SetIsPlaying(!isPlaying);
        if(!prevValue){
          audioPlayer.current.play();
        } else{
          audioPlayer.current.pause();
        }
  }

  return (
    <div className='audioPlayer'>
        <audio ref={audioPlayer}  src='' preload='metadata'></audio>
        <button className='forwardBackward'>30<IoPlayBack/></button>
        <button onClick={togglePlayPause} className='playPause'>{isPlaying ? <IoPauseSharp/>:<IoPlay className='play'/>}</button>
        <button className='forwardBackward'> <IoPlayForward/>30 </button>
{/*current time*/}
    <div className='currentTime'>0:00</div>
    {/*progress bar*/}
    <div>
        <input type="range" className='progressBar'/>
    </div>
    {/*duration*/}
    <div className='duration'>2:49</div>

    
    </div>
  )
}

export {Audioplayer}