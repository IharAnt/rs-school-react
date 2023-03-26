import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import RadioSet from '.';

describe('Text input test', () => {
  it('Input value', async () => {
    const testRef = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];
    render(
      <RadioSet
        label="Gender:"
        id="gender"
        name="gender"
        error="RadioSet error message"
        inputref={testRef}
        values={[
          { value: 'male', content: 'Male' },
          { value: 'female', content: 'Female' },
        ]}
      ></RadioSet>
    );
    const radioInputs = screen.getAllByTestId<HTMLInputElement>('radio-set-element');
    expect(radioInputs.length).toBe(2);

    const genderInput = screen.getByRole<HTMLInputElement>('radio-set-role', {
      name: /Female/i,
    });
    expect(genderInput).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(genderInput);
    expect(genderInput.checked).toEqual(true);
  });
});
