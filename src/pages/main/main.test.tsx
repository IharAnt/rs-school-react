import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from '.';

describe('Main page test', () => {
  it('Render main page', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
});
