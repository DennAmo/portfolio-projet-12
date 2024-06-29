import React from "react";
import AnimationExemple from "./AnimationExemple"

const Works = ({ projects }) => {
  return (
    <div className="works">
    <div className="works__animation">
              <AnimationExemple />
            <div className="works__projects">
      {projects.map((project, index) => (
        <div className="works__cards" key={index}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
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

export default Works;
