import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import CheckInput from '.';

describe('Text input test', () => {
  it('Input value', async () => {
    const testRef = React.createRef<HTMLInputElement>();
    render(
      <CheckInput
        label="Email:"
        id="agree"
        type="checkbox"
        inputref={testRef}
        error="Error checkbox message"
      ></CheckInput>
    );
    const input = screen.getByTestId<HTMLInputElement>('check-input-element');
    expect(input).toBeInTheDocument();
    expect(input.checked).toEqual(false);

    const user = userEvent.setup();
    await user.click(input);

    expect(input.checked).toEqual(true);
    expect(input.checked).toEqual(testRef.current?.checked);
  });
});
