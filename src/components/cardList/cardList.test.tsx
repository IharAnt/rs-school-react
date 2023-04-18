import { describe, it } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import product from '../../data/products.json';
import CardList from '.';
import appConfig from '../../config/AppConfig';
import { fakeProduct } from '../../tests/mocks/fakeproduct';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const server = setupServer(
  rest.get(`${appConfig.apiUrl}/66`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeProduct));
  })
);

describe('Card list test', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('Render card list', async () => {
    const testProducts = product.products.slice(0, 2);

    render(
      <Provider store={store}>
        <CardList products={testProducts}></CardList>
      </Provider>
    );

    expect(await screen.findAllByText(/Brand/i)).toHaveLength(2);
    expect(await screen.findAllByRole('img')).toHaveLength(2);
  });

  //problems with nodejs version
  // it('should open and close modal with card', async () => {
  //   const testProducts = product.products.slice(0, 1);

  //   render(
  //     <Provider store={store}>
  //       <CardList products={testProducts}></CardList>
  //     </Provider>
  //   );

  //   expect(await screen.findAllByText(/Brand/i)).toHaveLength(1);
  //   expect(await screen.findAllByRole('img')).toHaveLength(1);

  //   const img = await screen.findByText(/Brand/i);
  //   expect(img).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(img);

  //   await waitFor(async () => {
  //     expect(screen.queryByText(/Stock/i)).toBeInTheDocument();
  //     expect(screen.queryByText(/Rating/i)).toBeInTheDocument();
  //   });

  //   const overlay = screen.getByTestId<HTMLDivElement>('modal-close');
  //   expect(overlay).toBeInTheDocument();

  //   await user.click(overlay);
  //   expect(screen.queryByText(/Stock/i)).not.toBeInTheDocument();
  //   expect(screen.queryByText(/Rating/i)).not.toBeInTheDocument();
  // });

  // it('should open modal with error message', async () => {
  //   server.use(
  //     rest.get(`${appConfig.apiUrl}/66`, (_, res, ctx) => {
  //       return res(
  //         ctx.status(400, 'Bad request'),
  //         ctx.json({ message: 'Test error card message' })
  //       );
  //     })
  //   );
  //   const testProducts = product.products.slice(0, 1);

  //   render(
  //     <Provider store={store}>
  //       <CardList products={testProducts}></CardList>
  //     </Provider>
  //   );

  //   expect(await screen.findAllByText(/Brand/i)).toHaveLength(1);
  //   expect(await screen.findAllByRole('img')).toHaveLength(1);

  //   const img = await screen.findByText(/Brand/i);
  //   expect(img).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(img);

  //   await waitFor(async () =>
  //     expect(await screen.findByText(/Test error card message/i)).toBeInTheDocument()
  //   );
  // });
});
