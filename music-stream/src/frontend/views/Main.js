import Header from './Header';
import Home from './Home';
import Album from './album';
import Song from './song';
import Artist from './Artist';
import Error404 from './Error404';
import { Audioplayer } from './Audioplayer';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';

function Main(){
    return(
        <div>
        <BrowserRouter>
        <Header/>
        <Audioplayer/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/album' element={<Album/>}/>
        <Route path='/song' element={<Song/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path="*" element={<Error404/>} />

        </Routes>
        </BrowserRouter>
            
        </div>
           
    )
    
}

export default Main