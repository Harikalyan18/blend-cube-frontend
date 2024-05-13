import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { OfficeProvider } from './components/contexts/OfficeContext'
import { AuthProvider } from './components/contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <AuthProvider>
    <BrowserRouter>
      <OfficeProvider> 
          <App />
      </OfficeProvider>
    </BrowserRouter>
  </AuthProvider>
);
reportWebVitals()
