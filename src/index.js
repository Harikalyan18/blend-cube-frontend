import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { OfficeProvider } from './components/contexts/OfficeContext';
import { AuthProvider } from './components/contexts/AuthContext';
import { CategoryProvider } from './components/contexts/CategoriesContext';
import { MemberProvider } from './components/contexts/MemberContext';  // Make sure to import MemberProvider
import { SpaceProvider } from './components/contexts/SpaceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <OfficeProvider>
        <CategoryProvider>
          <MemberProvider>
            <SpaceProvider>
              <App />
            </SpaceProvider>
          </MemberProvider>
        </CategoryProvider>
      </OfficeProvider>
    </AuthProvider>
  </BrowserRouter>
);

reportWebVitals();

