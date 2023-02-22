import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DarkProvider from './components/context/DarkContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkProvider>
    <App />
    </DarkProvider>

    </BrowserRouter>
  </React.StrictMode>
);


