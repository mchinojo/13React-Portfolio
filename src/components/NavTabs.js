import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTabs.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavTabs() {
  return (
    <header id="topPage">
      {/* Navbar bar from react-bootstrap */}
      <Navbar className="navbar border-bottom border-dark" expand="lg">
        <Container fluid>
          {/* Brand/logo link */}
          <Navbar.Brand
            as={NavLink}
            to="/"
            end
            className={({ isActive }) =>
              `nav-link navbar-brand ${isActive ? "active" : ""}`
            }
          >
            Connie H.
          </Navbar.Brand>

          {/* Toggle button for responsive design */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links */}
            <Nav className="ms-auto">
              <NavLink
                to="/projects"
                // When the NavLink is active, the "active" class is added.
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                PROJECTS
              </NavLink>

              <NavLink
                to="/contact"
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
