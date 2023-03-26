import React from 'react';
import { Component } from 'react';
import './style.scss';
import { IRegistrationSelectProps } from './types';

export default class RegistrationSelect extends Component<IRegistrationSelectProps> {
  constructor(props: IRegistrationSelectProps) {
    super(props);
  }

  render() {
    const isValid = !!!this.props.error;
    return (
      <div className="reg-select-wrapper">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select
          className={`reg-select ${!isValid ? 'reg-select_error' : ''}`}
          ref={this.props.selectref}
          data-testid="reg-select-element"
          role="reg-select"
          defaultValue="default"
          {...this.props}
        >
          <option hidden disabled value="default">
            select an option
          </option>
          {this.props.values.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.content}
            </option>
          ))}
        </select>
        <div className="reg-select__error-message">{!isValid ? this.props.error : ' '}</div>
      </div>
    );
  }
}
