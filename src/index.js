import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CategoriesProvider } from './contexts/Products.context';
import { UserProvider } from './contexts/user-contexts'
import { CartProvider } from './contexts/cart-context';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider >
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider >   
      </UserProvider> 
    </BrowserRouter>
  </React.StrictMode>
);


