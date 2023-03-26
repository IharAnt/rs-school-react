import Navigation from '../navigation';
import React, { Component } from 'react';
import './style.scss';
import { NavProps, State } from './types';

export default class Header extends Component<NavProps, State> {
  constructor(props: NavProps) {
    super(props);
    this.getActivePage = this.getActivePage.bind(this);
    this.state = { activePage: '' };
  }

  getActivePage(): string {
    if (this.props.location.pathname === '/main') {
      return 'Main Page';
    }
    if (this.props.location.pathname === '/about') {
      return 'About Us';
    }
    if (this.props.location.pathname === '/form') {
      return 'Form Page';
    }
    return '404';
  }

  render() {
    return (
      <header className="header">
        <div className="wrapper header__wrapper">
          <Navigation />
          <div className="header__page">{this.getActivePage()}</div>
        </div>
      </header>
    );
  }
}
