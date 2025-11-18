import React, { useState } from 'react';
import './Menu.css';


const Menu = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="menu">
      <div className="menu-title">Claudia&Noé</div>
      <ul className={open ? 'open' : ''}>
        <li onClick={() => { onNavigate('inicio'); setOpen(false); }}>Inicio</li>
        <li onClick={() => { onNavigate('historia'); setOpen(false); }}>Nuestra Historia</li>
        <li onClick={() => { onNavigate('viajes'); setOpen(false); }}>Viajes</li>
      </ul>
      <button className="menu-toggle" onClick={handleMenuClick} aria-label="Abrir menú">
        <span className="menu-icon">&#9776;</span>
      </button>
    </nav>
  );
};

export default Menu;
