import Header from './Header';
import Home from './Home';
import Album from './album';
import Song from './song';
import Artist from './Artist';
import Error404 from './Error404';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';

function Main(){
    return(
        <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route path='/album' element={<Album/>}/>
        <Route path='/song' element={<Song/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path="/" component={<Error404/>} />
        <Route path="*" element={<Navigate to="/home"/>}> </Route>
        </Routes>
        </BrowserRouter>
            
        </div>
           
    )
    
}

export default Main