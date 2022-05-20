
import Home from './Home';
import Album from './album';
import Song from './song';
import Artist from './Artist';
import Error404 from './Error404';
import { Audioplayer } from './Audioplayer';
import Header from './Header';

import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Login from './Login';

function Main(){
    return(
        <div>
        <BrowserRouter>
        <Header/>
        <Audioplayer/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
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