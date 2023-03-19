import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { fakeProduct } from '../../tests/mocks/fakeproduct';

describe('Card list test', () => {
  it('Render card list', async () => {
    render(<Card product={fakeProduct}></Card>);

    expect(screen.getByText(`Catygory: ${fakeProduct.category}`)).toBeInTheDocument();
    expect(screen.getByText(`Stock: ${fakeProduct.stock}`)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${fakeProduct.rating}`)).toBeInTheDocument();
    expect(screen.getByText(`Brand: ${fakeProduct.brand}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
