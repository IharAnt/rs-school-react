import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  useRegister: UseFormRegisterReturn;
  error: FieldError | undefined;
}
