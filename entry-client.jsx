import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// SSR (dev server) renders markup into #root, so hydrate it.
// A static build ships an empty #root (the SSR placeholder is stripped),
// so mount with createRoot instead — hydrating an empty container
// would throw React's hydration mismatch error (#418).
const hasServerMarkup = Array.from(rootElement.childNodes).some(
  (node) => node.nodeType === Node.ELEMENT_NODE
);

if (hasServerMarkup) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
