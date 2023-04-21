import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '.';

describe('Search input test', () => {
  it('Input value', async () => {
    const testValue = Math.random();
    const searchFunc = vi.fn();
    render(
      <SearchInput
        className="search-input"
        type="search"
        name="search"
        label="Search:"
        searchClick={searchFunc}
        pressEnter={searchFunc}
        placeholder="Search..."
        aria-label="Small"
      ></SearchInput>
    );
    const input = screen.getByLabelText<HTMLInputElement>('Search:');
    expect(input).toBeInTheDocument();
    const button = screen.getByRole<HTMLButtonElement>('search-button');
    expect(button).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(input, testValue.toString());
    expect(input.value).toEqual(testValue.toString());
    input.focus();
    await user.keyboard('{enter}');

    await user.click(button);
    expect(searchFunc).toBeCalledTimes(2);
  });
});
