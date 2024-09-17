
import * as ReactDOMClient from 'react-dom/client';
import React from 'react'
import App from './App'
import { HelmetProvider } from 'react-helmet-async';
const root = document.getElementById('root') as HTMLElement;
ReactDOMClient.hydrateRoot(root,
  <HelmetProvider>
    <App />
  </HelmetProvider>
)