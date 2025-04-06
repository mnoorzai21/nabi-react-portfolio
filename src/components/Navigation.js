import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css"; // Optional: if you want to add custom styles

export default function Navigation(props) {
  const location = useLocation();

  const navLinkClass = (path) =>
    `text-light custom-nav nav-link mx-2 ${
      location.pathname === path ? "active fw-bold" : ""
    }`;

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="dark"
      className="bg-transparent py-3"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="text-light fs-4 fw-bold">
          Mohammad Nabi Noorzai
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/aboutme" className={navLinkClass("/aboutme")}>
              About Me
            </Link>
            <Link to="/projects" className={navLinkClass("/projects")}>
              Projects
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
            <Link to="/resume" className={navLinkClass("/resume")}>
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
