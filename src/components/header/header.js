import React from 'react'
import {Container, Nav, Navbar,NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.css'
const header = () => {
  return (
    <div>
     
           <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>My App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/' className='nav-link'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to='/user'>Post User</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default header
