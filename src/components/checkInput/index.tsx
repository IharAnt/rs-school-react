import React from 'react';
import { Component } from 'react';
import './style.scss';
import { ICheckInputProps } from './types';

export default class CheckInput extends Component<ICheckInputProps> {
  constructor(props: ICheckInputProps) {
    super(props);
  }

  render() {
    const isValid = !!!this.props.error;
    return (
      <div className="check-input-wrapper">
        <label htmlFor={this.props.id}>
          <input
            {...this.props}
            className={`check-input ${!isValid ? 'input_error' : ''}`}
            ref={this.props.inputref}
            data-testid="check-input-element"
            role="check-input"
          />
          {this.props.label}
        </label>
        {!isValid && <div className="input__error-message">{this.props.error}</div>}
      </div>
    );
  }
}
