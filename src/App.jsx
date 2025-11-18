import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Inicio from './Inicio';
import Historia from './Historia';
import Viajes from './Viajes';
import BeautifulCounter from './BeautifulCounter';
import { useEffect, useState as useStateReact } from 'react';

function App() {
  const [pagina, setPagina] = useState('inicio');
  const [tiempo, setTiempo] = useStateReact({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    function getTiempoJuntos() {
      const INICIO_FECHA = new Date(Date.UTC(2024, 11, 2, 0, 0, 0));
      const ahoraMadrid = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
      const diff = ahoraMadrid - INICIO_FECHA;
      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);
      return { dias, horas, minutos, segundos };
    }
    setTiempo(getTiempoJuntos());
    const timer = setInterval(() => {
      setTiempo(getTiempoJuntos());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  let contenido;
  if (pagina === 'inicio') contenido = <Inicio />;
  else if (pagina === 'historia') contenido = <Historia />;
  else if (pagina === 'viajes') contenido = <Viajes />;

  return (
    <div>
      <Menu onNavigate={setPagina} />
      {pagina === 'inicio' && (
        <BeautifulCounter
          dias={tiempo.dias}
          horas={tiempo.horas}
          minutos={tiempo.minutos}
          segundos={tiempo.segundos}
        />
      )}
      <div>
        {contenido}
      </div>
    </div>
  );
}

export default App;
