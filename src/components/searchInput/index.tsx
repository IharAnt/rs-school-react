import React from 'react';
import { Component } from 'react';
import './style.scss';
import { IInputProps } from './types';

export default class SearchInput extends Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <div className="search-wrapper">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input id={this.props.name} {...this.props}></input>
      </div>
    );
  }
}
