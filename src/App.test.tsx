import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe('App test', () => {
  it('Render App', () => {
    render(
      <Provider store={store}>
        <App></App>
      </Provider>,
      { wrapper: HashRouter }
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main page');
  });

  it('Render not found if invalid path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/bad/route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  it('Render about', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/About Us page/i)).toBeInTheDocument();
  });
});
