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

  it('SearchProducts should retern 5 products', async () => {
    const repsonse = await productService.searchProducts(0, 5, '');
    expect(repsonse.products.length).toEqual(5);
  });

  it('SearchProducts should retern products for search value samsung', async () => {
    const repsonse = await productService.searchProducts(0, 30, 'samsung');
    expect(repsonse.products.length > 0).toBeTruthy();
    expect(repsonse.products[0].brand).toEqual('Samsung');
  });

  it('SearchProducts should retern 5 fake products', async () => {
    apiClient.get = vi.fn().mockReturnValueOnce({ data: fakesearchResponse });

    const repsonse = await productService.searchProducts(0, 5, '');
    expect(repsonse.products.length).toEqual(5);
  });

  it('SearchProducts should retern 5 fake products', async () => {
    apiClient.get = vi.fn().mockReturnValueOnce({ data: fakeProduct });

    const repsonse = await productService.getProduct(66);
    expect(repsonse.brand).toEqual('Eastern Watches');
  });
});
