import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyle';
import exercise, { store } from "./exercise";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
  // </React.StrictMode>
);