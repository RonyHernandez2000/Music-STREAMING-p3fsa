import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Navbar } from "react-bootstrap";

function Header (){
    return(
        <div >
            <Navbar bg="dark" variant="dark" expand="lg" >
      <Nav>
<Nav.Item>
  <Nav.Link
    href="">Rony's Shop
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link
  >
  </Nav.Link>
</Nav.Item>
     </Nav>
            <Nav className='m-auto' >

  <Nav.Item>
    <Nav.Link href="/album">Album</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/artist">Artist</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/song">Song</Nav.Link>
  </Nav.Item>
</Nav>
</Navbar>
        </div>
     
    )
}

export default Header