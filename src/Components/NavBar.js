import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/navbar.css";
import { Navbar, Nav } from 'react-bootstrap';
function NavBar(){
    return (
        <Navbar className="nav-section" bg="light" expand="lg">
  <Navbar.Brand className="brand" href="#home"><span className="brand-custom">AYAN</span>AC<span className="brand-custom">.</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="nav-item" href="#home">About</Nav.Link>
      <Nav.Link className="nav-item" href="#link">Skills</Nav.Link>
      <Nav.Link className="nav-item" href="#link">Projects</Nav.Link>
      <Nav.Link className="nav-item" href="#link">Education</Nav.Link>
      <Nav.Link className="nav-item" href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default NavBar;