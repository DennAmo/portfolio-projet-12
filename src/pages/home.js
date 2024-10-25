import React, { useEffect, useState } from 'react';

const technologiesTop = [
  {
    title: 'SEO',
    img: './assets/seo.png',
  },
  {
    title: 'Debug',
    img: './assets/opti.png',
  },
  {
    title: 'Boost',
    img: './assets/boost.png',
  }
];

const technologiesBot = [
  {
    title: 'MySQL',
    img: './assets/sql.svg',
  },
  {
    title: 'MongoDB',
    img: './assets/mongo.svg',
  },
  {
    title: 'NodeJS',
    img: './assets/node.svg',
  }
];

const technologiesLeft = [
  {
    title: 'Html5',
    img: './assets/html.svg',
  },
  {
    title: 'React',
    img: './assets/react.svg',
  },
  {
    title: 'JS',
    img: './assets/js.svg',
  }
];

const technologiesRight = [
  {
    title: 'Css',
    img: './assets/css.svg',
  },
  {
    title: 'Sass',
    img: './assets/sass.svg',
  },
  {
    title: 'Redux',
    img: './assets/redux.svg',
  }
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
        currentTime += 230;

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
  }, [isHovered, segments]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setSegments(Array(15).fill(false));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (<>
 <h2 className='title'>Accueil</h2>
    <div className="btncontainer">
   
      <div> <div className='columnleft'>
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
      </div>
      <div>

        <div className='columntop'>
          {technologiesTop.map((tech, index) => (
            <div className="button-container" key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="tech-button3">
                <span className="button-text3">{tech.title}</span>
              </button>
              <div className="button-extension3">
                <div className="button-line3">
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


        <div className='columnbot'>
          {technologiesBot.map((tech, index) => (
            <div className="button-container" key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="tech-button4">
                <span className="button-text4">{tech.title}</span>
              </button>
              <div className="button-extension4">
                <div className="button-line4">
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

      <div>
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
    </div>
  </>
  );
};

export default Home;
