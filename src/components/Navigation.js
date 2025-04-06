import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="sm" className="row p-3 text-light">
      <Container>
        <h2>Mohammad Nabi Noorzai</h2>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="custom-nav-button"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav className="me-auto"></Nav>
            <Nav.Link
              href="#aboutme"
              className="text-light custom-nav"
              onClick={() => props.handlePageChange("AboutMe")}>
              About Me
            </Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link
              href="#projects"
              className="text-light custom-nav"
              onClick={() => props.handlePageChange("Projects")}>
              Projects
            </Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link
              href="#contact"
              className="text-light custom-nav"
              onClick={() => props.handlePageChange("Contact")}>
              Contact
            </Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link
              href="#resume"
              className="text-light custom-nav"
              onClick={() => props.handlePageChange("Resume")}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
