import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface ICheckInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: 'checkbox' | 'radio';
  formRegister: UseFormRegisterReturn;
  error: FieldError | undefined;
}
