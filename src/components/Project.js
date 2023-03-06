import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="col">
      <div class="card border border-dark rounded-0 text-center">
        <img
          src={process.env.PUBLIC_URL + props.image}
          class="card-img-top rounded-0 border-bottom border-dark"
          alt={props.title}
        ></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <a href={props.deployedLink} class="link">
            Deployment
          </a>
          <a href={props.githubLink} class="link">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
