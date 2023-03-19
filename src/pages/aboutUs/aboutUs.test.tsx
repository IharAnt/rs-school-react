import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from '.';

describe('About page test', () => {
  it('Render about page', () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    expect(screen.getByText(/About Us page/i)).toBeInTheDocument();
  });
});
