import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainLayout from './components/MainLayout';
import Students from './pages/Students';
import Pays from './pages/Pays';
import Workshops from './pages/Workshops';
import Teachers from './pages/Teachers';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/cuicacalli-app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/students" replace />} />
            <Route path="students" element={<Students />} />
            <Route path="pays" element={<Pays />} />
            <Route path="workshops" element={<Workshops />} />
            <Route path="teachers" element={<Teachers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
