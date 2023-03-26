import { InputHTMLAttributes } from 'react';

export interface IRegistrationSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  error: string;
  values: ISelectOptions[];
  selectref: React.RefObject<HTMLSelectElement>;
}

export interface ISelectOptions {
  value: string;
  content: string;
}
