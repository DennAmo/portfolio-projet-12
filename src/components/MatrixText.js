import React, { useEffect, useState } from 'react';


const MatrixText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const updateText = () => {
      let newText = '';
      for (let i = 0; i < text.length; i++) {
        newText += Math.random() > 0.05 ? text[i] : getRandomChar();
      }
      setDisplayedText(newText);
    };

    const interval = setInterval(updateText, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="matrix-text">{displayedText}</span>
  );
};

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é"(-è_çà)=^$ù*,;:!<>?./§%µ£¨~#{[|`@]}+°&²';

const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

export default MatrixText;
