import React from 'react';


import Search from './Search';
import Login from './Login';
import SortButtons from './SortButtons';

import NavStyled from './NavStyled';

const Nav = () => (
  <NavStyled>
    <SortButtons />
    <Search />
    <Login />
  </NavStyled>

);

export default Nav;
