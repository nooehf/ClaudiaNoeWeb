import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Stack from './Stack';

const destinos = [
  { nombre: 'Oporto', lat: 41.1579, lng: -8.6291 },
  { nombre: 'Madrid', lat: 40.4168, lng: -3.7038 },
  { nombre: 'Cerdeña', lat: 40.1209, lng: 9.0129 },
  { nombre: 'Salamanca', lat: 40.9701, lng: -5.6635 },
];

const pinIcon = new L.Icon({
  iconUrl: 'https://api.iconify.design/fxemoji:roundpushpin.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const center = [40.5, -3.7];

const ViajesMap = () => {
  const [seleccionado, setSeleccionado] = useState(null);
  const refs = destinos.reduce((acc, dest) => {
    acc[dest.nombre] = useRef(null);
    return acc;
  }, {});

  const scrollToSection = nombre => {
    const ref = refs[nombre];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '2rem auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
      <MapContainer center={center} zoom={5} style={{ height: '500px', width: '100%' }} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {destinos.map((dest, idx) => (
          <Marker key={idx} position={[dest.lat, dest.lng]} icon={pinIcon} eventHandlers={{ click: () => scrollToSection(dest.nombre) }}>
            <Popup>
              <strong>{dest.nombre}</strong><br/>
              ¡Recuerdo especial en {dest.nombre}!
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div style={{ marginTop: '2rem' }}>
        {destinos.map((dest, idx) => (
          <section
            key={idx}
            ref={refs[dest.nombre]}
            className="viaje-section"
          >
            <div className="viaje-info">
              <h3 style={{ color: '#e75480', marginBottom: '0.5rem' }}>{dest.nombre}</h3>
              <div style={{ minHeight: '60px', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #e75480', padding: '0.5rem', fontSize: '1rem', background: '#fff', color: '#444' }}>
                {/* Aquí irá la descripción fija de {dest.nombre} */}
                <span style={{ color: '#aaa' }}>Añade aquí la descripción de {dest.nombre}</span>
              </div>
            </div>
            <div className="viaje-carrusel">
              {/* Carrusel de imágenes aquí (ReactBit) */}
              {dest.nombre === 'Cerdeña' ? (
                <div style={{ width: '260px', maxWidth: '100%', margin: '0 auto' }}>
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 200, height: 200 }}
                    cardsData={[
                      { id: 1, img: 'https://iseuksionsnbvhladwwn.supabase.co/storage/v1/object/public/imageenes/cerdena1.jpg' },
                      { id: 2, img: 'https://iseuksionsnbvhladwwn.supabase.co/storage/v1/object/public/imageenes/cerdena2.jpg' },
                      { id: 3, img: 'https://iseuksionsnbvhladwwn.supabase.co/storage/v1/object/public/imageenes/cerdena3.jpg' },
                      { id: 4, img: 'https://iseuksionsnbvhladwwn.supabase.co/storage/v1/object/public/imageenes/cerdena4.jpg' }
                    ]}
                  />
                </div>
              ) : (
                <div style={{ border: '2px dashed #e75480', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', color: '#e75480', background: '#fff', minHeight: '160px', width: '260px', maxWidth: '100%', margin: '0 auto' }}>
                  Carrusel de imágenes de ReactBit aquí
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ViajesMap;
