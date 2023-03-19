import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchInput from '.';

describe('Search input test', () => {
  it('Input value', async () => {
    const value = Math.random();
    render(
      <SearchInput
        className="search-input"
        type="search"
        name="search"
        label="Search:"
        value={value}
        placeholder="Search..."
        aria-label="Small"
      ></SearchInput>
    );
    const input = screen.getByLabelText<HTMLInputElement>('Search:');
    expect(input.value).toEqual(value.toString());
  });
});
