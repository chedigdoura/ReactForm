import React from 'react';
import  '../CssFiles/Footer.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
  
  <Navbar bg="primary" variant="dark" className="nav_custom">
    <Container >
      <Navbar.Brand href="#home">Home</Navbar.Brand>
    </Container>
  </Navbar>

    
  )
}


export default Footer