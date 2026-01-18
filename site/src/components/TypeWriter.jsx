import { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = ({ text = "Hi, I'm Martin", speed = 100, delay = 500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let timeout;

    // Initial delay before typing starts
    timeout = setTimeout(() => {
      const type = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeout = setTimeout(type, speed);
        } else {
          // Typing done - blink cursor a few times then hide it
          setTimeout(() => setShowCursor(false), 2000);
        }
      };
      type();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <div className="typewriter-container">
      <h1 className="typewriter">
        {displayedText}
        <span className={`cursor ${showCursor ? 'blink' : 'hidden'}`}>|</span>
      </h1>
    </div>
  );
};

export default TypeWriter;
