import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/navbar.css";
import "../js/nav";
import { Navbar, Nav } from 'react-bootstrap';
import {Link}from 'react-scroll'


function NavBar(){
  
    return (
        <Navbar className="nav-section" id="nav-target"expand="lg">
  <Link smooth={true} to="top-link" offset={-100}><Navbar.Brand className="brand" href="#home" ><span className="brand-custom">AYAN</span>AC<span className="brand-custom">.</span></Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="about" smooth={true} offset={-100}><Nav.Link className="nav-item" href="#home">About</Nav.Link></Link>
      <Link to="skill" smooth={true}><Nav.Link className="nav-item" href="#link">Skills</Nav.Link></Link>
      <Link to="project" smooth={true}><Nav.Link className="nav-item" href="#link">Projects</Nav.Link></Link>
      <Link to="education" smooth={true} offset={-65}><Nav.Link className="nav-item" href="#link">Education</Nav.Link></Link>
      <Link to="contact" smooth={true} offset={-100}><Nav.Link className="nav-item" href="#link">Contact</Nav.Link></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default NavBar;