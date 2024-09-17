import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'

export function render() {
  const html = ReactDOMServer.renderToString(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  )
  return { html }
}