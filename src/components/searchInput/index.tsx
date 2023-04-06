import React, { FC } from 'react';
import './style.scss';
import { IInputProps } from './types';

const SearchInput: FC<IInputProps> = ({ name, label, search, pressEnter, ...props }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      pressEnter();
    }
  };
  return (
    <div className="search-wrapper">
      <label htmlFor={name}>{label}</label>
      <input onKeyDown={handleKeyDown} id={name} {...props}></input>
      <button onClick={() => search()} className="search__btn btn btn-success">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
