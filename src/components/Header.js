import React from 'react'
import {Navbar,   Nav, Container} from 'react-bootstrap'





const Header = () => {
  

  
    return (
        <header>
           <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
               <Container>
                 
                 <Navbar.Brand >Free Course</Navbar.Brand>
                 
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
   
      
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header


