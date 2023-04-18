import { FC } from 'react';
import Navigation from '../navigation';
import './style.scss';
import { NavProps } from './types';

const Header: FC<NavProps> = (props) => {
  const getActivePage = (): string => {
    if (props.location.pathname === '/main') {
      return 'Main Page';
    }
    if (props.location.pathname === '/about') {
      return 'About Us';
    }
    if (props.location.pathname === '/form') {
      return 'Form Page';
    }
    return '404';
  };

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Navigation />
        <div className="header__page">{getActivePage()}</div>
      </div>
    </header>
  );
};

export default Header;
