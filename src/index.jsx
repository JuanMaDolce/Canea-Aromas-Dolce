import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './pages/Store/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
);

<style>
@import url('https://fonts.googleapis.com/css2?family=Thasadith&display=swap');
</style>
