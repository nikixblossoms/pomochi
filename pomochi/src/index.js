import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <h1>Hello! This is the initial test of Pomochi</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);