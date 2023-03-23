import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormPage from '.';

describe('Main page test', () => {
  it('Render main page', () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Form page/i)).toBeInTheDocument();
  });
});
