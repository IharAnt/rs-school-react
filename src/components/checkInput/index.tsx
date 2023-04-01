import React, { FC } from 'react';
import './style.scss';
import { ICheckInputProps } from './types';

const CheckInput: FC<ICheckInputProps> = ({ id, label, formRegister, error, ...props }) => {
  return (
    <div className="check-input-wrapper">
      <label htmlFor={id}>
        <input
          className={`check-input ${error ? 'input_error' : ''}`}
          {...props}
          {...formRegister}
          data-testid="check-input-element"
          role="check-input"
        />
        {label}
      </label>
      <div className="input__error-message">{error ? error.message : ' '}</div>
    </div>
  );
};

export default CheckInput;
