import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IRadioSetProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  values: IRadioOptions[];
  formRegister: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export interface IRadioOptions {
  value: string;
  content: string;
}
