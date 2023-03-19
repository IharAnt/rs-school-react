import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import product from '../../data/products.json';
import CardList from '.';

describe('Card list test', () => {
  it('Render card list', async () => {
    const testProducts = product.products.slice(0, 2);

    render(<CardList products={testProducts}></CardList>);

    expect(await screen.findAllByText(/Brand/i)).toHaveLength(2);
    expect(await screen.findAllByText(/Catygory/i)).toHaveLength(2);
    expect(await screen.findAllByText(/Stock/i)).toHaveLength(2);
    expect(await screen.findAllByText(/Rating/i)).toHaveLength(2);
    expect(await screen.findAllByRole('img')).toHaveLength(2);
    expect(await screen.findAllByRole('button')).toHaveLength(2);
  });
});
