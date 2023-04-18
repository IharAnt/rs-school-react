import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { ClassNameProps } from './types';

const Navigation: FC = () => {
  const setActive = (props: ClassNameProps): string | undefined => {
    return props.isActive ? `nav-link active` : 'nav-link';
  };

  return (
    <nav className="header__navigation">
      <NavLink to="/main" className={setActive}>
        Main
      </NavLink>
      <NavLink to="/form" className={setActive}>
        Form
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About
      </NavLink>
      <NavLink to="/not/found" className={setActive}>
        Not Found
      </NavLink>
    </nav>
  );
};

export default Navigation;
