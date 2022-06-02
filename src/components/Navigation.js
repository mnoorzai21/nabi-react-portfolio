import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="sm" className="row p-3 ">
      <Container>
        <Navbar.Brand href="#home">
          <h2>Mohammad Nabi Noorzai</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="custom-nav-button"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#aboutme"
              className="text-dark custom-nav"
              onClick={() => props.handlePageChange("AboutMe")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="text-dark custom-nav"
              onClick={() => props.handlePageChange("Projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="text-dark custom-nav"
              onClick={() => props.handlePageChange("Contacts")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className="text-dark custom-nav"
              onClick={() => props.handlePageChange("Resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
