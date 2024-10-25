import React, { useState, useEffect } from "react";
import projects from "../data/projects.json"

const Projects = () => {

  const [project, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projects);
  }, []);


  return (
    <>
    <h2 className='title'>Mes Projets</h2>
    <div className="works">
        <div className="works__projects">
          {project.map((project, index) => (
            <div className="works__cards" key={index}>
                <h2>{project.title}</h2>
                <img className="works__image" src={project.image} alt={project.title} />
                <p>{project.description}</p>
              <div className="iconcontain">
              {project.technologies.map((tech) => (
                  <img alt={tech.name} className="icon" src={tech.icon} />
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className="glow-on-hover" type="button">Aperçu du site</button>
              </a>
              <a href={project.git} target="_blank" rel="noreferrer">
              <button className="glow-on-hover" type="button">Voir sur GitHub</button>
              </a>
            </div>
          ))}
        </div>
      </div>
      </>
  );
};

export default Projects;
