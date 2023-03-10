import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
