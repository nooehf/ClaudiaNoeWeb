import React from 'react';
import './CounterPages.css';

function CounterPages({ dias, horas, minutos, segundos }) {
  return (
    <div className="counter-pages-container">
      <div className="counter-page" style={{top: '90px', left: '80px'}}>{dias}</div>
      <div className="counter-page" style={{top: '230px', left: '80px', fontSize: '2.5rem'}}>{horas} : {minutos} : {segundos}</div>
    </div>
  );
}

export default CounterPages;
