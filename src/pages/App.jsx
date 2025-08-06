// vite_react_base/src/pages/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Centro Cultural Cuicacalli</h1>
      <p>Bienvenido al sistema de gestión</p>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <Link to="/registro">📝 Registrar Participante</Link>
        <Link to="/pago">💰 Registrar Pago</Link>
        <Link to="/talleres">📚 Consultar Talleres</Link>
        <Link to="/participantes">👥 Ver Participantes</Link>
        <Link to="/pagos-pendientes">⏰ Pagos Pendientes</Link>
      </nav>
    </div>
  );
};

export default App;