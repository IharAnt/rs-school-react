import Navigation from '../Navigation';
import React, { Component } from 'react';
import './style.scss';
import { Props, State } from './types';

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
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

    return '404';
  }

  render() {
    return (
      <header>
        <Navigation />
        <div>{this.getActivePage()}</div>
      </header>
    );
  }
}
