import React from 'react';
import { NavLink } from 'react-router-dom';

import SortButtonsStyled from './SortButtonsStyled';

const SortButtons = () => (
  <SortButtonsStyled>
    <NavLink
      activeClassName="selected"
      to=""
      exact
      className="btn"
    >
      New
    </NavLink>
    <NavLink
      activeClassName="selected"
      to=""
      exact
      className="btn"
    >
      Best
    </NavLink>
  </SortButtonsStyled>
);

export default SortButtons;
