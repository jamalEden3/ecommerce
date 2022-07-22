import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { ProductsProvider } from './context/ProductsContext';
import { FilteredProductsProvider } from './context/FilteredProductsContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from "@auth0/auth0-react";

// dev-238yqgwb.us.auth0.com [Domain] 
// e18ONPkJOuz8yjgO0yEOdxvEoKN8v71Z [Client ID] 

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-238yqgwb.us.auth0.com"
      clientId="e18ONPkJOuz8yjgO0yEOdxvEoKN8v71Z"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <ProductsProvider>
          <FilteredProductsProvider>
            <CartProvider>
                <App />
            </CartProvider>
          </FilteredProductsProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
