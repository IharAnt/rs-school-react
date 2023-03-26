import React from 'react';
import { Component } from 'react';
import './style.scss';
import { IRadioSetProps } from './types';

export default class RadioSet extends Component<IRadioSetProps> {
  constructor(props: IRadioSetProps) {
    super(props);
  }

  render() {
    const isValid = !!!this.props.error;
    // this.props.values.map(() => this.props.inputref.push(createRef()));
    return (
      <fieldset className={`radio-set-wrapper ${!isValid ? 'radio-set-wrapper_error' : ''}`}>
        <legend>{this.props.label}</legend>
        {this.props.values.map((opt, indx) => {
          return (
            <label htmlFor={opt.value} key={opt.value}>
              <input
                id={opt.value}
                type="radio"
                className="radio-set"
                name={this.props.name}
                value={opt.value}
                ref={this.props.inputref[indx]}
                data-testid="radio-set-element"
                role="radio-set-role"
              />
              {opt.content}
            </label>
          );
        })}
        <div className="radio-set__error-message">{!isValid ? this.props.error : ' '}</div>
      </fieldset>
    );
  }
}
