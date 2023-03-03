import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div class="card border border-dark rounded-0 text-center">
      <img
        src={props.image}
        class="card-img-top rounded-0"
        alt={props.title}
      ></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <a href={props.deployedLink} class="link">
          Go to page
        </a>
        <a href={props.githubLink} class="link">
          Go to repository
        </a>
      </div>
    </div>
  );
}

export default Project;
