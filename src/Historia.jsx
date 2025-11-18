
import React, { useState } from 'react';
import './Historia.css';

const eventos = [
  {
    fecha: '02/08/2023',
    texto: 'Nos conocimos',
    detalles: ''
  },
  {
    fecha: '02/08/2024',
    texto: 'Nos reencontramos',
    detalles: ''
  },
  {
    fecha: '02/12/2024',
    texto: 'Empezamos a salir',
    detalles: ''
  },
  {
    fecha: '14/02/2025',
    texto: 'Madrid',
    detalles: ''
  },
  {
    fecha: '2023-06-01',
    texto: 'Empezamos nuestra relación 💖',
    detalles: 'Ese día comenzó nuestra aventura juntos, llena de ilusión y cariño.'
  },
  {
    fecha: '2023-07-15',
    texto: 'Primer viaje juntos a la playa 🏖️',
    detalles: 'Un viaje inolvidable, risas, sol y muchas fotos bonitas.'
  },
  {
    fecha: '2023-09-10',
    texto: 'Nuestro primer aniversario 🎉',
    detalles: 'Celebramos nuestro primer año con una cena especial y recuerdos.'
  },
];

const Historia = () => {
  const [abierto, setAbierto] = useState(null);

  const handleToggle = idx => {
    setAbierto(abierto === idx ? null : idx);
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Nuestra Historia</h2>
      <ul className="timeline">
        {eventos.map((evento, idx) => (
          <li
            key={idx}
            className={`timeline-event ${idx % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => handleToggle(idx)}
          >
            <div className="timeline-date">{evento.fecha}</div>
            <div className="timeline-text">{evento.texto}</div>
            {abierto === idx && (
              <div className="timeline-details">{evento.detalles}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historia;
