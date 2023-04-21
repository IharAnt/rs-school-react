import { describe, it, expect } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import RegistrationSelect from '.';
import { IRegistrationSelectProps } from './types';
import { useForm } from 'react-hook-form';

describe('Registration select test', () => {
  it('select option', async () => {
    const { result } = renderHook(() =>
      useForm<IRegistrationSelectProps>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
      })
    );
    const {
      register,
      formState: { errors },
    } = result.current;
    render(
      <RegistrationSelect
        label="Country:"
        id="country"
        values={[
          { value: 'usa', content: 'USA' },
          { value: 'canada', content: 'Canada' },
        ]}
        formRegister={register('country', {
          validate: (country) => !country || country !== 'default' || 'Please, select country',
        })}
        error={errors.country}
      ></RegistrationSelect>
    );
    const select = screen.getByTestId<HTMLSelectElement>('reg-select-element');
    expect(select).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(2);

    const option = screen.getByRole<HTMLOptionElement>('option', {
      name: /USA/i,
    });
    expect(option).toBeInTheDocument();

    const user = userEvent.setup();

    await user.selectOptions(select, option);
    expect(option.selected).toBe(true);
  });
});
