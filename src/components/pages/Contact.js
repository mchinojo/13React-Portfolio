import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="jumbotron px-4 py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 my-5 mb-5">Say hello</h1>
          <form>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control border border-dark rounded-0"
                id="exampleFormControlInput1"
                placeholder="Your mail"
              ></input>
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control border border-dark rounded-0"
                id="exampleFormControlTextarea1"
                placeholder="Your message"
                rows="3"
              ></textarea>
            </div>
          </form>
          <ul className="nav justify-content-center my-5">
            <li className="nav-item">
              <a
                className="nav-link"
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1pQMyYyFu0-AEh0qp9MGjDMgospVd5IwL/view?usp=share_link"
              >
                My résumé
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/mchinojo"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/conihesp/"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="noreferrer"
                target="_blank"
                href="mailto:myemail@example.com"
              >
                My email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
