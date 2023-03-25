import { InputHTMLAttributes } from 'react';

export interface ICheckInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  type: 'checkbox' | 'radio';
  inputref: React.RefObject<HTMLInputElement>;
}
