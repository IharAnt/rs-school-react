import { describe, it } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import CheckInput from '.';
import { useForm } from 'react-hook-form';
import { ICheckInputProps } from './types';

describe('Text input test', () => {
  it('Input value', async () => {
    const { result } = renderHook(() =>
      useForm<ICheckInputProps>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
      })
    );
    const {
      register,
      formState: { errors },
    } = result.current;
    render(
      <CheckInput
        label="I give my agree to the processing of personal data"
        id="agree"
        type="checkbox"
        formRegister={register('agree', {
          required: {
            value: true,
            message: 'You should give agree to the processing of personal data',
          },
        })}
        error={errors.agree}
      ></CheckInput>
    );
    const input = screen.getByTestId<HTMLInputElement>('check-input-element');
    expect(input).toBeInTheDocument();
    expect(input.checked).toEqual(false);

    const user = userEvent.setup();
    await user.click(input);

    expect(input.checked).toEqual(true);
  });
});
