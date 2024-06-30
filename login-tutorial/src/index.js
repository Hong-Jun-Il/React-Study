import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyle';
import { TodoProvider } from './contexts/TodoContext';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartProvider>
      <GlobalStyles />
      <App />
    </CartProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
