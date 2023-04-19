import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const render = (url: string, options: object) => {
  const html = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App></App>
      </StaticRouter>
    </Provider>,
    options
  );
  return { html };
};
