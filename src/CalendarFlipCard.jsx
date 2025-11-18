import React, { useEffect, useRef, useState } from 'react';
import './CalendarFlipCard.css';

function CalendarFlipCard({ value, label }) {
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
    <div className="calendar-flip-container">
      <div className="calendar-anillas">
        <svg width="32" height="32" viewBox="0 0 32 32" style={{marginRight: '8px', position: 'absolute', left: '10px', top: '0', zIndex: 10}}>
          <defs>
            <linearGradient id="anillaMetal1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fff"/>
              <stop offset="60%" stop-color="#b0b0b0"/>
              <stop offset="100%" stop-color="#888"/>
            </linearGradient>
          </defs>
          <circle cx="16" cy="12" r="8" fill="url(#anillaMetal1)" stroke="#888" strokeWidth="2" />
          <circle cx="16" cy="12" r="3" fill="#fff" stroke="#bbb" strokeWidth="1" />
        </svg>
        <svg width="32" height="32" viewBox="0 0 32 32" style={{position: 'absolute', right: '10px', top: '0', zIndex: 10}}>
          <defs>
            <linearGradient id="anillaMetal2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fff"/>
              <stop offset="60%" stop-color="#b0b0b0"/>
              <stop offset="100%" stop-color="#888"/>
            </linearGradient>
          </defs>
          <circle cx="16" cy="12" r="8" fill="url(#anillaMetal2)" stroke="#888" strokeWidth="2" />
          <circle cx="16" cy="12" r="3" fill="#fff" stroke="#bbb" strokeWidth="1" />
        </svg>
      </div>
      <div className={`calendar-flip-card${flip ? ' flip' : ''}`}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '18px',
          background: 'linear-gradient(180deg, #f5f5f5 60%, #e0e0e0 100%)',
          borderBottom: '1px dashed #ccc',
          boxShadow: '0 2px 6px rgba(0,0,0,0.10)',
          zIndex: 2
        }} />
        <span style={{
          position: 'relative',
          zIndex: 3,
          textShadow: '0 2px 6px #fff, 0 1px 0 #ccc',
        }}>{displayValue}</span>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '16px',
          background: 'linear-gradient(0deg, #e0e0e0 0%, #fff 100%)',
          borderTop: '1px solid #eee',
          boxShadow: '0 6px 16px rgba(0,0,0,0.10)',
          zIndex: 1
        }} />
      </div>
      <div className="calendar-flip-label">{label}</div>
    </div>
  );
}

export default CalendarFlipCard;
