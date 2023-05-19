import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import '@styles/index.css';

// eslint-disable-next-line import/prefer-default-export
export const render = () => ReactDOMServer.renderToString(<App />);
