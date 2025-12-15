import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Look for the specific widget ID instead of generic 'root'
const rootElement = document.getElementById('cyst-assist-widget');
if (!rootElement) {
  throw new Error("Could not find element 'cyst-assist-widget' to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);