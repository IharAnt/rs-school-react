import { describe, it } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from '.';
import userEvent from '@testing-library/user-event';
import appConfig from '../../config/AppConfig';
import { fakesearchResponse } from '../../tests/mocks/fakesearchResponse';

const fakeSamsungs = {
  ...fakesearchResponse,
  products: fakesearchResponse.products.filter(
    (product) => product.brand.toLowerCase() === 'samsung'
  ),
};

const server = setupServer(
  rest.get(`${appConfig.apiUrl}/search`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeSamsungs));
  })
);

describe('Main page test', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('Render main page', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });

  it('Error when error from Api', async () => {
    server.use(
      rest.get(`${appConfig.apiUrl}/search`, (_, res, ctx) => {
        return res(ctx.status(400, 'Bad request'));
      })
    );
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    const input = screen.getByRole<HTMLInputElement>('search-input');
    expect(input).toBeInTheDocument();

    const user = userEvent.setup();
    await user.clear(input);
    await user.type(input, 'samsung');
    expect(input.value).toEqual('samsung');

    input.focus();
    await user.keyboard('{enter}');
    await waitFor(async () =>
      expect(await screen.findByText(/Request failed with status code 400/i)).toBeInTheDocument()
    );
  });

  it('Search samsung cards', async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    const input = screen.getByRole<HTMLInputElement>('search-input');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole<HTMLButtonElement>('search-button');
    expect(button).toBeInTheDocument();

    const user = userEvent.setup();
    await user.clear(input);
    await user.type(input, 'samsung');
    expect(input.value).toEqual('samsung');

    await user.click(button);
    await waitFor(async () => expect(await screen.findAllByText(/Brand/i)).toHaveLength(1));
  });
});
