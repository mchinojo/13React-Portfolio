import React from "react";
import Project from "../Project";
import projectData from "../data/project-data.json";
import "./ProjectGallery.css";

function ProjectGallery() {
  // Rendering the ProjectGallery component,
  // which displays a list of Project components
  // with project data from project-data.json.
  return (
    // Creating a div to hold the Project components.
    <div className="container px-4 py-5 my-5">
      <h1 className="display-4 mb-5 text-center">My Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Project data is mapped over to create a list of Project components */}
        {projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          ></Project>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
