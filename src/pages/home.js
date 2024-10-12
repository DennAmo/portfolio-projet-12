import React, { useEffect, useState } from 'react';

const technologiesLeft = [
  {
    title: 'React',
    img: './assets/react.png',
  },
];

const technologiesRight = [
  {
    title: 'Sass',
    img: './assets/sass.png',
  },
];

const Home = () => {
  const [segments, setSegments] = useState(Array(15).fill(false));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) return;

    let intervalId;
    let totalDuration = 3000; 
    let currentTime = 0;

    const startClignotement = () => {
      intervalId = setInterval(() => {
        currentTime += 100;

        const newSegments = segments.map((segment) => {
          if (segment) return true; 
          return Math.random() < currentTime / totalDuration;
        });

        setSegments(newSegments);

        if (currentTime >= totalDuration || newSegments.every((segment) => segment)) {
          clearInterval(intervalId);
          setSegments(Array(15).fill(true)); 
        }
      }, 100);
    };

    startClignotement();

    return () => clearInterval(intervalId); 
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true); 
    setSegments(Array(15).fill(false)); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false); 
  };

  return (
    <div className="btncontainer">
      <div className='columnleft'>
        {technologiesLeft.map((tech, index) => (
          <div className="button-container" key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="tech-button">
              <span className="button-text">{tech.title}</span>
            </button>
            <div className="button-extension">
              <div className="button-line">
                {segments.map((active, segmentIndex) => (
                  <div key={segmentIndex} className={`line-segment ${active ? 'active' : ''}`}></div>
                ))}
              </div>
              <img 
                src={tech.img} 
                alt={`${tech.title} Icon`} 
                className="button-icon"
              />
            </div>
          </div>
        ))}
      </div>

      <div className='myself'> 
        <img src="/assets/myself.jpeg" alt="Myself" />
      </div>

      <div className='columnright'>
        {technologiesRight.map((tech, index) => (
          <div className="button-container" key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="tech-button2">
              <span className="button-text2">{tech.title}</span>
            </button>
            <div className="button-extension2">
              <div className="button-line2">
                {segments.map((active, segmentIndex) => (
                  <div key={segmentIndex} className={`line-segment ${active ? 'active' : ''}`}></div>
                ))}
              </div>
              <img 
                src={tech.img} 
                alt={`${tech.title} Icon`} 
                className="button-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
