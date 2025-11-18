import React from 'react';
import './BeautifulCounter.css';

function BeautifulCounter({ dias, horas, minutos, segundos }) {
  return (
    <div className="beautiful-counter-container">
      <div className="beautiful-counter-numbers">
        {dias} <span style={{fontSize: '1rem', color: '#888'}}>días</span> : {horas} <span style={{fontSize: '1rem', color: '#888'}}>horas</span> : {minutos} <span style={{fontSize: '1rem', color: '#888'}}>min</span> : {segundos} <span style={{fontSize: '1rem', color: '#888'}}>seg</span>
      </div>
      <div className="beautiful-counter-bar-container">
        <div className="beautiful-counter-bar">
          <div className="beautiful-counter-bar-fill" />
          <div className="beautiful-counter-bar-text">para toda la vida</div>
        </div>
      </div>
    </div>
  );
}

export default BeautifulCounter;
