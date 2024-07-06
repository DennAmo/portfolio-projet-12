import React, { useState, useEffect }from "react";
import projects from "../data/projects.json"

const Projects = () => {

      const [project, setProjects] = useState([]);
      useEffect(() => {
        setProjects(projects);
      }, []);

  return (
    <div className="works">
    <div className="works__animation">
      <h3>Click pour aperçu du site</h3>
            <div className="works__projects">
      {project.map((project, index) => (
        <div className="works__cards" key={index}>
          <a href={project.link}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
          </a>
          <a href={project.git} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Projects;
