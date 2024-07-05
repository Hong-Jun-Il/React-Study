import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { MbtiProvider } from './context/mbtiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <MbtiProvider>
      <App />
    </MbtiProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
