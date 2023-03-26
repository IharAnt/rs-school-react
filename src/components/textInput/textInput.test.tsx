import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextInput from '.';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('Text input test', () => {
  it('Input value', async () => {
    const testValue = Math.random();
    const emailRef = React.createRef<HTMLInputElement>();
    render(
      <TextInput
        label="Email:"
        id="email"
        inputref={emailRef}
        error="Error email message"
      ></TextInput>
    );
    const input = screen.getByTestId<HTMLInputElement>('text-input-element');
    expect(input).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(input, testValue.toString());

    expect(input.value).toEqual(emailRef.current?.value);
  });
});
