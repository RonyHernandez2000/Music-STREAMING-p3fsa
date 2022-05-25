import React, {useState, useRef, useEffect} from 'react'
import './styles/Audioplayer.css';
import {IoPlayBack} from "react-icons/io5"
import {IoPlayForward} from "react-icons/io5"
import{IoPlay} from "react-icons/io5"
import{IoPauseSharp} from "react-icons/io5"



const Audioplayer = () => {
  const  [isPlaying, SetIsPlaying]= useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0)

 

  //references
  
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  },[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) =>{
    const minutes = Math.floor (secs/60);
    const returnedMinutes = minutes < 10? `0${minutes}`: `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  }

  const togglePlayPause =() => {
    const prevValue = isPlaying;
      SetIsPlaying(prevValue=> !prevValue);
        SetIsPlaying(!isPlaying);
        if(!prevValue){
          audioPlayer.current.play();
          animationRef.current = requestAnimationFrame(whilePlaying)
        } else{
          audioPlayer.current.pause();
          cancelAnimationFrame(animationRef.current);
        }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value / duration * 100} %`);
    setCurrentTime(progressBar.current.value);

  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value )- 30;
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value )+ 30;
    changeRange();
  }
// Buttons
  return (
    <div className='audioPlayer'>
      
        <audio ref={audioPlayer}  src='' preload='metadata'></audio>
        <button className='forwardBackward' onClick={backThirty}>30<IoPlayBack/></button>
        <button onClick={togglePlayPause} className='playPause'>{isPlaying ? <IoPauseSharp/>:<IoPlay className='play'/>}</button>
        <button className='forwardBackward' onClick={forwardThirty}> <IoPlayForward/>30 </button>
{/*current time*/}
    <div className='currentTime'>{calculateTime(currentTime)}</div>
    {/*progress bar*/}
    <div>
        <input type="range" className='progressBar' defaultValue="0" ref={progressBar} onChange={changeRange}/>
    </div>
    {/*duration*/}
    <div className='duration'>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>

    
    </div>
  )
}

export {Audioplayer}