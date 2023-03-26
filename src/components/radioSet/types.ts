import { InputHTMLAttributes } from 'react';

export interface IRadioSetProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  values: IRadioOptions[];
  inputref: React.RefObject<HTMLInputElement>[];
}

export interface IRadioOptions {
  value: string;
  content: string;
}
