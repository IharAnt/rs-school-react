import { describe, it, expect, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormPage from '.';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Form page test', () => {
  it('Render Form page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Form page/i)).toBeInTheDocument();
  });
});
