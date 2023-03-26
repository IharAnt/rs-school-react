import { InputHTMLAttributes } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  inputref: React.RefObject<HTMLInputElement>;
}
