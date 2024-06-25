import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import { GlobalStyles } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <GlobalStyles />
    <App />
  </RecoilRoot>
  // </React.StrictMode>
);