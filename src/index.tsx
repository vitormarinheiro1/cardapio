import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';
import Menu from 'components/Menu';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu />
    <Router />
  </React.StrictMode>
);
