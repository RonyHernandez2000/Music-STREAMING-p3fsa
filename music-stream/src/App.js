import Main from "./frontend/views/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./frontend/views/Home";

const code =new URLSearchParams(window.location.search).get('code');
function App() {
  
return code ? <Home code={code}/>: <Main/>
     
}

export default App;
