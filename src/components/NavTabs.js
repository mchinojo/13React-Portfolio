import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  return (
    <header id="topPage">
      <nav className="navbar border-bottom border-dark navbar-expand-lg">
        <div className="container-fluid">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link navbar-brand ${isActive ? "active" : ""}`
            }
          >
            Connie H.
          </NavLink>
          <button
            className="customToggle navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  PROJECTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
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
