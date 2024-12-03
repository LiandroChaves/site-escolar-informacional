import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './AppWrapper'; // Certifique-se de importar AppWrapper, não App
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
