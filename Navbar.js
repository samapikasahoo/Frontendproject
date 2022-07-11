import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import '../style/index.css';

function NavBarComponent() {
  return (
    <div>
        <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className='my-2'>
          <Navbar.Brand href="#home">Fashiop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Shop</Nav.Link>
              <Nav.Link href="#deets">Cart</Nav.Link>
              <Nav.Link href="#deets">Wish List</Nav.Link>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link href="#deets">Login / Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}
export default  NavBarComponent;
