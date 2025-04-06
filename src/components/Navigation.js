import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark p-3">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="#home" className="h2 text-light">
          Mohammad Nabi Noorzai
        </Navbar.Brand>

        {/* Navbar Toggle for mobile view */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="custom-nav-button"
        />

        {/* Navbar Collapse */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* ms-auto aligns the nav items to the right */}
            <Nav.Link
              href="#aboutme"
              className={`text-light custom-nav ${
                props.currentPage === "AboutMe" ? "active" : ""
              }`}
              onClick={() => props.handlePageChange("AboutMe")}>
              About Me
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`text-light custom-nav ${
                props.currentPage === "Projects" ? "active" : ""
              }`}
              onClick={() => props.handlePageChange("Projects")}>
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`text-light custom-nav ${
                props.currentPage === "Contact" ? "active" : ""
              }`}
              onClick={() => props.handlePageChange("Contact")}>
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={`text-light custom-nav ${
                props.currentPage === "Resume" ? "active" : ""
              }`}
              onClick={() => props.handlePageChange("Resume")}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
