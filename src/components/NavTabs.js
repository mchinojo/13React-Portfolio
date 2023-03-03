import React from "react";
import { NavLink } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  return (
    <header id="topPage">
      <nav className="navbar navbar-expand-lg">
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
                  to="about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutMe">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutMe">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <NavLink
    //       to="/"
    //       end
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Home
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="about"
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       About
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="blog"
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Blog
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="contact"
    //       end
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Contact
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="contact/learn"
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Learn
    //     </NavLink>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
