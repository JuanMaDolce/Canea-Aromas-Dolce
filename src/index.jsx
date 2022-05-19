import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './pages/Store/cart-context';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDS7yGRE0d_-Vm3D2NtfhwvI2MmTZsaiCQ",
  authDomain: "canela-aromas-dolce.firebaseapp.com",
  projectId: "canela-aromas-dolce",
  storageBucket: "canela-aromas-dolce.appspot.com",
  messagingSenderId: "691710546589",
  appId: "1:691710546589:web:49db0c213ff055b74f7a74"
};

initializeApp(firebaseConfig)

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