import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import LoginStyled from './LoginStyled';

const Login = () => (
  <LoginStyled>
    <button type="submit">Se connecter</button>
    <NavLink
      activeClassName="selected"
      to="/signIn"
      exact
    >
      S'inscrire
    </NavLink>
  </LoginStyled>

);


export default Login;
