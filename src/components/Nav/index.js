import React from 'react';


import SearchBar from './SearchBar';
import Login from './Login';
import SortButtons from './SortButtons';

import NavStyled from './NavStyled';

const Nav = () => (
  <NavStyled>
    <SortButtons />
    <SearchBar />
    <Login />
  </NavStyled>

);

export default Nav;
