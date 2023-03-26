import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from '.';

describe('Registration Form test', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('Add card shoud run', async () => {
    global.URL.createObjectURL = vi.fn();
    const addUserCardMock = vi.fn();
    render(<RegistrationForm addUserCard={addUserCardMock}></RegistrationForm>);
    const input = screen.getByLabelText<HTMLInputElement>('Username:');
    expect(input).toBeInTheDocument();

    const emailInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /email/i,
    });
    expect(emailInput).toBeInTheDocument();

    const userNameInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /userName/i,
    });
    expect(userNameInput).toBeInTheDocument();

    const birthdayInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /birthday/i,
    });
    expect(birthdayInput).toBeInTheDocument();

    const countrySelect = screen.getByRole<HTMLSelectElement>('reg-select', {
      name: /country/i,
    });
    expect(countrySelect).toBeInTheDocument();

    const imageInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /image/i,
    });
    expect(imageInput).toBeInTheDocument();

    const agreeInput = screen.getByRole<HTMLInputElement>('check-input', {
      name: /agree/i,
    });
    expect(agreeInput).toBeInTheDocument();

    const genderInput = screen.getByRole<HTMLInputElement>('radio-set-role', {
      name: /Female/i,
    });
    expect(genderInput).toBeInTheDocument();

    const submitButton = screen.getByRole<HTMLInputElement>('submit-btn');
    expect(submitButton).toBeInTheDocument();

    const user = userEvent.setup();
    const email = 'test@mail.com';
    await user.type(emailInput, email);
    expect(emailInput.value).toEqual(email);

    const name = 'Joni';
    await user.type(userNameInput, name);
    expect(userNameInput.value).toEqual(name);

    const date = '2000-01-02';
    await user.type(birthdayInput, date);
    expect(birthdayInput.value).toEqual(date);

    const option = screen.getByRole<HTMLOptionElement>('option', {
      name: /USA/i,
    });
    expect(option).toBeInTheDocument();
    await user.selectOptions(countrySelect, option);
    expect(option.selected).toBe(true);

    const file = new File(['file'], 'file.png', { type: 'image/png' });
    await user.upload(imageInput, file);
    expect(imageInput.files).toHaveLength(1);

    await user.click(agreeInput);
    expect(agreeInput.checked).toEqual(true);

    await user.click(genderInput);
    expect(genderInput.checked).toEqual(true);

    await user.click(submitButton);
    expect(addUserCardMock).toBeCalledTimes(1);
  });

  it('Add card shoud not run', async () => {
    global.URL.createObjectURL = vi.fn();
    const addUserCardMock = vi.fn();
    render(<RegistrationForm addUserCard={addUserCardMock}></RegistrationForm>);
    const input = screen.getByLabelText<HTMLInputElement>('Username:');
    expect(input).toBeInTheDocument();

    const emailInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /email/i,
    });
    expect(emailInput).toBeInTheDocument();

    const userNameInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /userName/i,
    });
    expect(userNameInput).toBeInTheDocument();

    const birthdayInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /birthday/i,
    });
    expect(birthdayInput).toBeInTheDocument();

    const countrySelect = screen.getByRole<HTMLSelectElement>('reg-select', {
      name: /country/i,
    });

    const imageInput = screen.getByRole<HTMLInputElement>('text-input', {
      name: /image/i,
    });
    expect(imageInput).toBeInTheDocument();

    const agreeInput = screen.getByRole<HTMLInputElement>('check-input', {
      name: /agree/i,
    });
    expect(agreeInput).toBeInTheDocument();

    const submitButton = screen.getByRole<HTMLInputElement>('submit-btn');
    expect(submitButton).toBeInTheDocument();

    const user = userEvent.setup();
    const email = 'test';
    await user.type(emailInput, email);
    expect(emailInput.value).toEqual(email);

    const name = 'Jo';
    await user.type(userNameInput, name);
    expect(userNameInput.value).toEqual(name);

    const date = '2022-01-02';
    await user.type(birthdayInput, date);
    expect(birthdayInput.value).toEqual(date);

    await user.selectOptions(countrySelect, 'default');

    expect(imageInput.files).toHaveLength(0);
    expect(agreeInput.checked).toEqual(false);

    await user.click(submitButton);
    expect(addUserCardMock).not.toBeCalledTimes(1);
  });
});
