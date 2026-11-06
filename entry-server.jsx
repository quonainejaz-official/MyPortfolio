import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export async function render(_url) {
  return renderToString(<App />);
}

