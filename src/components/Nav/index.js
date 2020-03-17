import React from 'react';


import Search from './Search';
import Login from './Login';
import SortButtons from './SortButtons';

const Nav = () => (
  <div>
    <SortButtons />
    <Search />
    <Login />
  </div>

);

export default Nav;
