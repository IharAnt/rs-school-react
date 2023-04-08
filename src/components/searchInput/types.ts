import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  searchClick: () => void;
  pressEnter: () => void;
}
