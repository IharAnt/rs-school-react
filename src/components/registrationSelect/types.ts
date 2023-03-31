import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IRegistrationSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  values: ISelectOptions[];
  useRegister: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export interface ISelectOptions {
  value: string;
  content: string;
}
