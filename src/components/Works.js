import React from "react";

const Works = ({ projects }) => {
  return (
    <div className="works">
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
  );
};

export default Works;
