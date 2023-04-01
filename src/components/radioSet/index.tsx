import React, { FC } from 'react';
import './style.scss';
import { IRadioSetProps } from './types';

const RadioSet: FC<IRadioSetProps> = ({ label, values, formRegister, error, ...props }) => {
  return (
    <fieldset className={`radio-set-wrapper ${error ? 'radio-set-wrapper_error' : ''}`}>
      <legend>{label}</legend>
      {values.map((opt) => {
        return (
          <label htmlFor={opt.value} key={opt.value}>
            <input
              id={opt.value}
              type="radio"
              className="radio-set"
              value={opt.value}
              {...props}
              {...formRegister}
              data-testid={`radio-set-element`}
              role={`radio-set-role-${opt.value}`}
            />
            {opt.content}
          </label>
        );
      })}
      <div className="radio-set__error-message">{error ? error.message : ' '}</div>
    </fieldset>
  );
};

export default RadioSet;
