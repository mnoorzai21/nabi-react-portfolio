import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="sm" className="row p-3 text-light">
      <Container>
        <Navbar.Brand href="#aboutme" className="text-light site-name">
          Mohammad Nabi Noorzai
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
              className={`text-light custom-nav${props.currentPage === "AboutMe" ? " active-nav" : ""}`}
              aria-current={props.currentPage === "AboutMe" ? "page" : undefined}
              onClick={() => props.handlePageChange("AboutMe")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`text-light custom-nav${props.currentPage === "Projects" ? " active-nav" : ""}`}
              aria-current={props.currentPage === "Projects" ? "page" : undefined}
              onClick={() => props.handlePageChange("Projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`text-light custom-nav${props.currentPage === "Contact" ? " active-nav" : ""}`}
              aria-current={props.currentPage === "Contact" ? "page" : undefined}
              onClick={() => props.handlePageChange("Contact")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={`text-light custom-nav${props.currentPage === "Resume" ? " active-nav" : ""}`}
              aria-current={props.currentPage === "Resume" ? "page" : undefined}
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
