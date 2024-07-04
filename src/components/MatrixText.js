import React, { useEffect, useState } from 'react';

const MatrixText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState([]);

  useEffect(() => {
    const updateText = () => {
      const newText = text.split('').map((char, index) => ({
        char: Math.random() > 0.02 ? char : getRandomChar(),
        key: index,
      }));
      setDisplayedText(newText);
    };

    const interval = setInterval(updateText, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <pre className="matrix-text">
      {displayedText.map(({ char, key }) => (
        <span key={key} className="matrix-char">{char}</span>
      ))}
    </pre>
  );
};

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

export default MatrixText;
