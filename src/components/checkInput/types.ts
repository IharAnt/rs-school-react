import { InputHTMLAttributes } from 'react';

export interface ICheckInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  inputref: React.RefObject<HTMLInputElement>;
}
