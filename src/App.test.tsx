import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  it('Render App', () => {
    render(<App></App>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vite + React2');
  });
});
