import Home from './Home';
import Album from './album';
import Song from './song';
import Artist from './Artist'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function Main(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
        <Route path='/album' element={<Album/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/song' element={<Song/>}/>
        <Route path='/artist' element={<Artist/>}/>
        </Routes>
        </BrowserRouter>
        
        </div>
    )      
}

export default Main