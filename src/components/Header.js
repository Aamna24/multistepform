import React from 'react'
import {Navbar,   Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { NavDropdown } from 'react-bootstrap'


const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state=> state.userLogin)

  const {userInfo} = userLogin

  const logoutHandler=()=>{

  }
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


