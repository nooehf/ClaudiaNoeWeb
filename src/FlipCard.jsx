import React, { useEffect, useRef, useState } from 'react';
import './FlipCounter.css';

function FlipCard({ value, label }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [flip, setFlip] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (value !== prevValue.current) {
      setFlip(true);
      setTimeout(() => {
        setDisplayValue(value);
        setFlip(false);
      }, 250);
      prevValue.current = value;
    }
  }, [value]);

  return (
    <div className="flip-container">
      <div className={`flip-card${flip ? ' flip' : ''}`}>{displayValue}</div>
      <div className="flip-label">{label}</div>
    </div>
  );
}

export default FlipCard;
