import React from "react";
import "./Project.css";

function Project(props) {
  // Defining the structure and content of the Project component as a card.
  return (
    <div className="col">
      <div className="card border border-dark rounded-0 text-center">
        {/* Displaying the project image */}
        <img
          src={process.env.PUBLIC_URL + props.image}
          className="card-img-top rounded-0 border-bottom border-dark"
          alt={props.title}
        ></img>

        <div className="card-body">
          {/* Displaying the project title */}
          <h5 className="card-title">{props.title}</h5>
          {/* Displaying a link to the deployed page */}
          <a
            href={props.deployedLink}
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Deployed page
          </a>
          {/* Displaying a link to the project repository */}
          <a
            href={props.githubLink}
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
