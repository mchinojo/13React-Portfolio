import React from "react";
import Project from "../Project";
import projectData from "../data/project-data.json";

function ProjectGallery() {
  return (
    <div className="container px-4 py-5 my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectData.map((project) => (
          <Project
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
