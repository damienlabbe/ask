import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderStyled from './HeaderStyled';

const Header = () => (
  <HeaderStyled>
    <NavLink
      activeClassName="selected"
      to="/"
      exact
      className="title"
    >
      Ask !
    </NavLink>

    <h3 className="title2">Raconte nous tes plus belles anecdotes ...</h3>
  </HeaderStyled>
);


export default Header;
