import React, { FC } from 'react';
import './style.scss';
import { IInputProps } from './types';

const SearchInput: FC<IInputProps> = ({ name, label, ...props }) => {
  return (
    <div className="search-wrapper">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...props}></input>
    </div>
  );
};

export default SearchInput;
