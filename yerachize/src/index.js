import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Core from './pages/Core'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Core />
  </React.StrictMode>
);

reportWebVitals();
