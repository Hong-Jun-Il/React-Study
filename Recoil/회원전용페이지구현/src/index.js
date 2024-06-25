import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import { GlobalStyles } from './styles/GlobalStyle';
import { worker } from './mocks/browser.js';

async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser.js')
 
  return worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <GlobalStyles />
    <App />
  </RecoilRoot>
  // </React.StrictMode>
);