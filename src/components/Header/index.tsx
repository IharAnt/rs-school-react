import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { Props, ClassNameProps, State } from './types';

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.setActive = this.setActive.bind(this);
    this.setPage = this.setPage.bind(this);
    this.state = { activePage: '' };
  }

  setActive(props: ClassNameProps): string | undefined {
    return props.isActive ? ` active` : '';
  }

  setPage(): string {
    if (this.props.location.pathname === '/main') {
      return 'Main Page';
    }
    if (this.props.location.pathname === '/about') {
      return 'About Us';
    }

    return '404';
  }

  render() {
    return (
      <header>
        <div>{this.setPage()}</div>
        <nav>
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
      </header>
    );
  }
}
