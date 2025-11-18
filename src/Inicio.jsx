import React from 'react';
import './Inicio.css';
import CircularGallery from './CircularGallery';
import { galleryItems } from './galleryItems';
import { Icon } from '@iconify/react';

const Inicio = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '0 1rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700',
          background: 'linear-gradient(90deg, #ff8da8 0%, #5eb3e6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem'
        }}>
          Claudia y Noé
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#555',
          fontWeight: '500'
        }}>
          La mejor relación del mundo
        </p>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', margin: '0', padding: '0', maxWidth: '100vw' }}>
        <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image">
            <img 
              src="https://iseuksionsnbvhladwwn.supabase.co/storage/v1/object/public/imageenes/perfilclaudia.jpg?width=400&height=400&quality=95" 
              alt="Claudia"
              loading="eager"
            />
          </div>
          <h2 className="profile-name">Claudia</h2>
          <p className="profile-birth">Fecha de nacimiento: 28 de febrero de 2005</p>
          <p className="profile-description">
          <span style={{display: 'block', marginBottom: '0.5rem'}}>💖 La novia más guapa del mundo, con sus ojos preciosos.</span>
          <span style={{display: 'block', marginBottom: '0.5rem'}}>🎭 Siempre está dispuesta a añadir drama a cualquier situación.</span>
          <span style={{display: 'block'}}>🤗 Y nunca falta el cariño para Noé.</span>
          </p>
            <a
              href="https://www.instagram.com/claudiiaavlz_?igsh=bGxydXc5YjZnM3Y2"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-instagram"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #ff8da8 0%, #5eb3e6 100%)',
                color: '#fff',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                transition: 'background 0.2s'
              }}
            >
              <Icon icon="mdi:instagram" style={{marginRight: '0.5rem', fontSize: '1.2em', verticalAlign: 'middle'}} />
              Instagram
            </a>
        </div>

        <div className="profile-card">
          <div className="profile-image">
            <img 
              src="https://iseuksionsnbvhladwwn.supabase.co/storage/v1/object/public/imageenes/perfilnoe.jpg?width=400&height=400&quality=95" 
              alt="Noé"
              loading="eager"
            />
          </div>
          <h2 className="profile-name">Noé</h2>
          <p className="profile-birth">Fecha de nacimiento: 27 de noviembre de 2005</p>
            <p className="profile-description">
            <span style={{display: 'block', marginBottom: '0.5rem'}}>🦾 El novio terraneitor, luchador de olas y del mal humor de Claudia (pocas veces).</span>
            <span style={{display: 'block'}}>👨‍🍳 Chef oficial de comidas guarrindongas.</span>
            </p>
            <a
              href="https://www.instagram.com/nooehf?igsh=MzcyZnRsd3dqOGJj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-instagram"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #ff8da8 0%, #5eb3e6 100%)',
                color: '#fff',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                transition: 'background 0.2s'
              }}
            >
              <Icon icon="mdi:instagram" style={{marginRight: '0.5rem', fontSize: '1.2em', verticalAlign: 'middle'}} />
              Instagram
            </a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
