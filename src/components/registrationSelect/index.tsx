import React, { FC } from 'react';
import './style.scss';
import { IRegistrationSelectProps } from './types';

const RegistrationSelect: FC<IRegistrationSelectProps> = ({
  id,
  label,
  values,
  formRegister,
  error,
  ...props
}) => {
  return (
    <div className="reg-select-wrapper">
      <label htmlFor={id}>{label}</label>
      <select
        className={`reg-select ${error ? 'reg-select_error' : ''}`}
        defaultValue="default"
        {...props}
        {...formRegister}
        data-testid="reg-select-element"
        role="reg-select"
      >
        <option hidden disabled value="default">
          select an option
        </option>
        {values.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.content}
          </option>
        ))}
      </select>
      <div className="reg-select__error-message">{error ? error.message : ' '}</div>
    </div>
  );
};

export default RegistrationSelect;
