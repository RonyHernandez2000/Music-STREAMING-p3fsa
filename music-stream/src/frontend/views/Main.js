
import Home from './Home';
import Album from './album';
import Song from './song';
import Artist from './Artist';
import Error404 from './Error404';
import { Audioplayer } from './Audioplayer';
import Header from './Header';
import './styles/Main.css'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Login from './Login';
import { useEffect,useState } from 'react';
import { setClientToken } from './spotify';
import Library from './library';
import Upload from './upload';
import signInWithGoogle from './Login';
import { authentication } from './Firebase/firebase-config';


function Main(){
    const[token, setToken] = useState("");

    useEffect(() =>{
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if(!token && hash){

            const _token = hash.split("&")[0].split('=')[1];
        window.localStorage.setItem("token", _token);
        setToken(_token);
        setClientToken(_token);
        }else {
            setToken(token);
            setClientToken(token);
        }
        
        
    },[]);
    return !token | !signInWithGoogle ? (<Login/>
    ):(
        <div className='main-body'>
        <BrowserRouter>
        <Header/>
        <Audioplayer/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/album' element={<Album/>}/>
        <Route path='/song' element={<Song/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path="*" element={<Error404/>} />
        </Routes>
        </BrowserRouter>
            
        </div>
    )
}

    

export default Main