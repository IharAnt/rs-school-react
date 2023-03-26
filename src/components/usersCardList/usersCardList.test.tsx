import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from '.';
import { fakeUsersList } from '../../tests/mocks/fakeUsersList';

describe('Card list test', () => {
  it('Render card list', async () => {
    render(<CardList userCards={fakeUsersList}></CardList>);

    expect(await screen.findAllByText(/Email/i)).toHaveLength(2);
    expect(await screen.findAllByText(/Birthday/i)).toHaveLength(2);
    expect(await screen.findAllByText(/Country/i)).toHaveLength(2);
    expect(await screen.findAllByText(/Gender/i)).toHaveLength(2);
    expect(await screen.findAllByRole('img')).toHaveLength(2);
  });
});
