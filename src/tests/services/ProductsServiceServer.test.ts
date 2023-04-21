import { describe, it, expect } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { productService } from '../../services/ProductsService';
import { fakesearchResponse } from '../mocks/fakesearchResponse';
import { fakeProduct } from '../mocks/fakeproduct';
import appConfig from '../../config/AppConfig';

const server = setupServer(
  rest.get(`${appConfig.apiUrl}/search`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakesearchResponse));
  }),
  rest.get(`${appConfig.apiUrl}/products/66`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeProduct));
  })
);

describe('ProductService test', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('SearchProducts should retern 5 fake products', async () => {
    const repsonse = await productService.searchProducts(0, 5, '');
    expect(repsonse.products.length).toEqual(5);
  });

  it('SearchProducts should retern 5 fake products', async () => {
    const repsonse = await productService.getProduct(66);
    expect(repsonse.brand).toEqual('Eastern Watches');
  });
});
