import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';

describe('App test', () => {
  it('Render App', () => {
    render(<App></App>, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main page');
  });
  it('Render not found if invalid path', () => {
    const badRoute = '/bad/route';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
