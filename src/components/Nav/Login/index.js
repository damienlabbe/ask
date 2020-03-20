import React from 'react';

import { NavLink } from 'react-router-dom';

import LoginStyled from './LoginStyled';

const Login = () => (
  <LoginStyled>
    <NavLink
      activeClassName="selected"
      to=""
      exact
      className="btn"
    >
      Connexion
    </NavLink>
    <NavLink
      activeClassName="selected"
      to="/signIn"
      exact
      className="btn"
    >
      Inscription
    </NavLink>
  </LoginStyled>

);


export default Login;
