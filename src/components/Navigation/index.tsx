import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { ClassNameProps } from './types';

export default class Navigation extends Component<unknown> {
  constructor(props: unknown) {
    super(props);
    this.setActive = this.setActive.bind(this);
    this.state = { activePage: '' };
  }
  setActive(props: ClassNameProps): string | undefined {
    return props.isActive ? `nav-link active` : 'nav-link';
  }

  render() {
    return (
      <nav className="header__navigation">
        <NavLink to="/main" className={this.setActive}>
          Main
        </NavLink>
        <NavLink to="/about" className={this.setActive}>
          About
        </NavLink>
        <NavLink to="/not/found" className={this.setActive}>
          Not Found
        </NavLink>
      </nav>
    );
  }
}
