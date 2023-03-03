import React from "react";
import Project from "../Project";
import projectData from "../data/project-data.json";

function ProjectGallery() {
  return (
    <div className="card-group border-dark rounded-0 px-4 py-5 my-5">
      {projectData.map((project) => (
        <Project
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        ></Project>
      ))}
    </div>
  );
}

export default ProjectGallery;
