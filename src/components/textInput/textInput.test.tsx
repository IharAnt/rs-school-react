import { describe, it } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import TextInput from '.';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { IFormInputs } from '../registrationForm/types';
import { useForm } from 'react-hook-form';

describe('Text input test', () => {
  it('Input value', async () => {
    const { result } = renderHook(() =>
      useForm<IFormInputs>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
      })
    );
    const testValue = Math.random();
    const {
      register,
      formState: { errors },
    } = result.current;
    render(
      <TextInput
        label="Email:"
        id="email"
        type="email"
        formRegister={register('email', {
          required: {
            value: true,
            message: 'Please enter your email',
          },
        })}
        error={errors.email}
      ></TextInput>
    );
    const input = screen.getByTestId<HTMLInputElement>('text-input-element');
    expect(input).toBeInTheDocument();

    const user = userEvent.setup();
    await user.type(input, testValue.toString());

    expect(input.value).toEqual(testValue.toString());
  });
});
