import React from 'react';
import './CalendarBlock.css';

function CalendarBlock({ children }) {
  return (
    <div className="calendar-block" style={{overflow: 'visible'}}>
      <div className="calendar-block-anillas">
        <svg className="calendar-block-anilla" viewBox="0 0 38 38">
          <defs>
            <linearGradient id="blockAnillaMetal1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff"/>
              <stop offset="60%" stopColor="#b0b0b0"/>
              <stop offset="100%" stopColor="#888"/>
            </linearGradient>
          </defs>
          <circle cx="19" cy="19" r="15" fill="url(#blockAnillaMetal1)" stroke="#888" strokeWidth="3" />
          <circle cx="19" cy="19" r="5" fill="#fff" stroke="#bbb" strokeWidth="1" />
        </svg>
        <svg className="calendar-block-anilla" viewBox="0 0 38 38">
          <defs>
            <linearGradient id="blockAnillaMetal2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff"/>
              <stop offset="60%" stopColor="#b0b0b0"/>
              <stop offset="100%" stopColor="#888"/>
            </linearGradient>
          </defs>
          <circle cx="19" cy="19" r="15" fill="url(#blockAnillaMetal2)" stroke="#888" strokeWidth="3" />
          <circle cx="19" cy="19" r="5" fill="#fff" stroke="#bbb" strokeWidth="1" />
        </svg>
        <svg className="calendar-block-anilla" viewBox="0 0 38 38">
          <defs>
            <linearGradient id="blockAnillaMetal3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff"/>
              <stop offset="60%" stopColor="#b0b0b0"/>
              <stop offset="100%" stopColor="#888"/>
            </linearGradient>
          </defs>
          <circle cx="19" cy="19" r="15" fill="url(#blockAnillaMetal3)" stroke="#888" strokeWidth="3" />
          <circle cx="19" cy="19" r="5" fill="#fff" stroke="#bbb" strokeWidth="1" />
        </svg>
      </div>
      <div className="calendar-block-holes">
        <div className="calendar-block-hole" />
        <div className="calendar-block-hole" />
        <div className="calendar-block-hole" />
      </div>
      {children}
      <div className="calendar-block-base" />
    </div>
  );
}

export default CalendarBlock;
