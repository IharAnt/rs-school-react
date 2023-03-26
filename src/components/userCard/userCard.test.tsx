import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { fakeUserCard } from '../../tests/mocks/fakeUserCard';
import UserCard from '.';

describe('Card list test', () => {
  it('Render card list', async () => {
    render(<UserCard userCard={fakeUserCard}></UserCard>);

    expect(screen.getByText(`Email: ${fakeUserCard.email}`)).toBeInTheDocument();
    expect(screen.getByText(`Birthday: ${fakeUserCard.birthday}`)).toBeInTheDocument();
    expect(screen.getByText(`Country: ${fakeUserCard.country}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${fakeUserCard.gender}`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
