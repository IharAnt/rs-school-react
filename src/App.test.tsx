import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App test', () => {
  it('Render App', () => {
    render(<App></App>, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main page');
  });

  it('Render not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/bad/route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  it('Render about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/About Us page/i)).toBeInTheDocument();
  });
});
