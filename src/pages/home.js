import React, { useEffect, useState } from 'react';

const technologies = {
  top: [
    { title: 'SEO', img: './assets/seo.png', category: 'optimization' },
    { title: 'Debug', img: './assets/opti.png', category: 'development' },
    { title: 'Boost', img: './assets/boost.png', category: 'optimization' }
  ],
  right: [
    { title: 'CSS', img: './assets/css.svg', category: 'frontend' },
    { title: 'Sass', img: './assets/sass.svg', category: 'frontend' },
    { title: 'Redux', img: './assets/redux.svg', category: 'frontend' }
  ],
  bottom: [
    { title: 'MySQL', img: './assets/sql.svg', category: 'backend' },
    { title: 'MongoDB', img: './assets/mongo.svg', category: 'backend' },
    { title: 'NodeJS', img: './assets/node.svg', category: 'backend' }
  ],
  left: [
    { title: 'HTML5', img: './assets/html.svg', category: 'frontend' },
    { title: 'React', img: './assets/react.svg', category: 'frontend' },
    { title: 'JavaScript', img: './assets/js.svg', category: 'frontend' }
  ]
};

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [segments, setSegments] = useState(Array(15).fill(false));

  useEffect(() => {
    if (!activeSection) return;

    let intervalId;
    const animateSegments = () => {
      let progress = 0;
      intervalId = setInterval(() => {
        progress += 0.1;
        setSegments(prev => prev.map(() => Math.random() < progress));
        
        if (progress >= 1) {
          clearInterval(intervalId);
          setSegments(Array(15).fill(true));
        }
      }, 50);
    };

    animateSegments();
    return () => clearInterval(intervalId);
  }, [activeSection]);

  const TechButton = ({ tech, position }) => (
    <div 
      className={`tech-button-wrapper ${position} ${activeSection === tech.title ? 'active' : ''}`}
      onMouseEnter={() => {
        setActiveSection(tech.title);
        setSegments(Array(15).fill(false));
      }}
      onMouseLeave={() => setActiveSection(null)}
    >
      <button className="tech-button">
        <span className="tech-title">{tech.title}</span>
        <div className="connection-line">
          {segments.map((active, i) => (
            <div 
              key={i} 
              className={`segment ${active ? 'active' : ''}`}
            />
          ))}
        </div>
        <img 
          src={tech.img} 
          alt={`${tech.title} icon`} 
          className="tech-icon"
        />
      </button>
    </div>
  );

  return (
    <div className="home-container">
      <h1 className="title">Portfolio</h1>
      
      <div className="tech-orbit">
        <div className="tech-section top">
          {technologies.top.map((tech, i) => (
            <TechButton key={i} tech={tech} position="top" />
          ))}
        </div>

        <div className="middle-row">
          <div className="tech-section left">
            {technologies.left.map((tech, i) => (
              <TechButton key={i} tech={tech} position="left" />
            ))}
          </div>

          <div className="profile-container">
            <div className="profile-frame">
              <img 
                src="/assets/myself.jpeg" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>

          <div className="tech-section right">
            {technologies.right.map((tech, i) => (
              <TechButton key={i} tech={tech} position="right" />
            ))}
          </div>
        </div>

        <div className="tech-section bottom">
          {technologies.bottom.map((tech, i) => (
            <TechButton key={i} tech={tech} position="bottom" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
