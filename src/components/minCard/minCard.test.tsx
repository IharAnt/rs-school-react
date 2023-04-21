import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MinCard from '.';
import { fakeProduct } from '../../tests/mocks/fakeproduct';

describe('Card list test', () => {
  it('Render card list', async () => {
    const clickCard = vi.fn();
    render(<MinCard product={fakeProduct} onClickCard={clickCard}></MinCard>);

    expect(screen.getByText(`Brand: ${fakeProduct.brand}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
