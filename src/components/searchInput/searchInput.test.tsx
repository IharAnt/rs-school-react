import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '.';

describe('Search input test', () => {
  it('Input value', async () => {
    const testValue = Math.random();
    render(
      <SearchInput
        className="search-input"
        type="search"
        name="search"
        label="Search:"
        placeholder="Search..."
        aria-label="Small"
      ></SearchInput>
    );
    const input = screen.getByLabelText<HTMLInputElement>('Search:');
    expect(input).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(input, testValue.toString());

    expect(input.value).toEqual(testValue.toString());
  });
});
