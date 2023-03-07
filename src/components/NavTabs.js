import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTabs.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavTabs() {
  return (
    <header id="topPage">
      <Navbar className="navbar border-bottom border-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            {" "}
            <NavLink
              to="/13React-Portfolio/"
              end
              className={({ isActive }) =>
                `nav-link navbar-brand ${isActive ? "active" : ""}`
              }
            >
              Connie H.
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/13React-Portfolio/projects"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                PROJECTS
              </NavLink>

              <NavLink
                to="/13React-Portfolio/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                CONTACT ME
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavTabs;
