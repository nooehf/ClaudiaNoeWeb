import React, { useState } from 'react';
import './Menu.css';


const Menu = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <>
      <nav className="menu">
        <div className="menu-title">Claudia&Noé</div>
        <ul className={open ? 'open' : ''}>
          <li onClick={() => handleNavigation('inicio')}>Inicio</li>
          <li onClick={() => handleNavigation('historia')}>Nuestra Historia</li>
          <li onClick={() => handleNavigation('viajes')}>Viajes</li>
        </ul>
        <button className="menu-toggle" onClick={handleMenuClick} aria-label="Abrir menú">
          <span className="menu-icon">{open ? '✕' : '☰'}</span>
        </button>
      </nav>
      {open && <div className="menu-overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
};

export default Menu;
