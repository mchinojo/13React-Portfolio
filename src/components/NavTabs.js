import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTabs.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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

function NavTabsOriginal() {
  return (
    <header id="topPage">
      <nav className="navbar border-bottom border-dark navbar-expand-lg">
        <div className="container-fluid">
          <NavLink
            to="/13React-Portfolio/"
            end
            className={({ isActive }) =>
              `nav-link navbar-brand ${isActive ? "active" : ""}`
            }
          >
            Connie H.
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/13React-Portfolio/projects"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  PROJECTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/13React-Portfolio/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  CONTACT ME
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;
