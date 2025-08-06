import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Pays from './pages/Pays';
import Students from './pages/Students';
import Workshops from './pages/WorkShops';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pays" element={<Pays />} />
        <Route path="/students" element={<Students />} />
        <Route path="/workshops" element={<Workshops />} />
       
      </Routes>
    </Router>
  </React.StrictMode>
);