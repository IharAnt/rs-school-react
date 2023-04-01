import { describe, it } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import RadioSet from '.';
import { useForm } from 'react-hook-form';
import { IRadioSetProps } from './types';

describe('Text input test', () => {
  it('Input value', async () => {
    const { result } = renderHook(() =>
      useForm<IRadioSetProps>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
      })
    );
    const {
      register,
      formState: { errors },
    } = result.current;
    render(
      <RadioSet
        label="Gender:"
        id="gender"
        values={[
          { value: 'male', content: 'Male' },
          { value: 'female', content: 'Female' },
        ]}
        formRegister={register('gender', {
          required: {
            value: true,
            message: 'Please, select gender',
          },
        })}
        error={errors.gender}
      ></RadioSet>
    );
    const radioInputs = screen.getAllByTestId<HTMLInputElement>('radio-set-element');
    expect(radioInputs.length).toBe(2);

    const genderInput = screen.getByRole<HTMLInputElement>('radio-set-role-female');
    expect(genderInput).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(genderInput);
    expect(genderInput.checked).toEqual(true);
  });
});
