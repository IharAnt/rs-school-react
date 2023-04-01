import React, { FC } from 'react';
import './style.scss';
import { ITextInputProps } from './types';

const TextInput: FC<ITextInputProps> = ({ id, label, formRegister, error, ...props }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        className={`text-input ${error ? 'input_error' : ''}`}
        {...props}
        {...formRegister}
        data-testid="text-input-element"
        role="text-input"
      />
      <div className="input__error-message">{error ? error.message : ' '}</div>
    </div>
  );
};

export default TextInput;
