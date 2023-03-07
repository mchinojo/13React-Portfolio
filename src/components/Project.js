import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="col">
      <div className="card border border-dark rounded-0 text-center">
        <img
          src={process.env.PUBLIC_URL + props.image}
          className="card-img-top rounded-0 border-bottom border-dark"
          alt={props.title}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <a href={props.deployedLink} target="_blank" className="link">
            Deployed page
          </a>
          <a href={props.githubLink} target="_blank" className="link">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
