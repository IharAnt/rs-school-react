import { describe, it, vi } from 'vitest';
import { productService } from '../../services/ProductsService';
import { fakesearchResponse } from '../mocks/fakesearchResponse';
import apiClient from '../../services/ApiClient';
import { fakeProduct } from '../mocks/fakeproduct';

describe('ProductService test', () => {
  afterEach(() => {
    vi.resetAllMocks();
    vi.clearAllMocks();
  });

  it('SearchProducts should retern 5 fake products', async () => {
    apiClient.get = vi.fn().mockReturnValueOnce({ data: fakesearchResponse });

    const repsonse = await productService.searchProducts(0, 5, '');
    expect(repsonse.products.length).toEqual(5);
    expect(repsonse.products[0].brand).toEqual('Apple');
  });

  it('SearchProducts should retern fake product', async () => {
    apiClient.get = vi.fn().mockReturnValueOnce({ data: fakeProduct });

    const repsonse = await productService.getProduct(66);
    expect(repsonse.brand).toEqual('Eastern Watches');
  });
});
