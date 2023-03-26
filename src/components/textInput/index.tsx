import React from 'react';
import { Component } from 'react';
import './style.scss';
import { ITextInputProps } from './types';

export default class TextInput extends Component<ITextInputProps> {
  constructor(props: ITextInputProps) {
    super(props);
  }

  render() {
    const isValid = !!!this.props.error;
    return (
      <div className="input-wrapper">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          {...this.props}
          className={`text-input ${!isValid ? 'input_error' : ''}`}
          ref={this.props.inputref}
          data-testid="text-input-element"
          role="text-input"
        />
        {!isValid && <div className="input__error-message">{this.props.error}</div>}
      </div>
    );
  }
}
