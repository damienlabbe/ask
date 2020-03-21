import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import LoginForm from './LoginForm';

import SettingsStyled from './SettingsStyled';


const Settings = ({ open, isLogged, toggleForm }) => (
  <SettingsStyled>
    <div>
      {isLogged && (
        <div>
          <NavLink
            to="/"
            activeClassName="selected"
            exact
          >
            <button type="button" className="btn">Déconnexion</button>
          </NavLink>
          <NavLink
            activeClassName="selected"
            exact
          >
            <button type="button" className="btn">Profil</button>
          </NavLink>
        </div>
      )}
      {!open && (
        <>
          <NavLink
            to="/"
            activeClassName="selected"
            exact
            onClick={toggleForm}
          >
            <button type="button" className="btn">Connection</button>
          </NavLink>
          <NavLink
            activeClassName="selected"
            to="/signIn"
            exact
          >
            <button type="button" className="btn">Inscription</button>
          </NavLink>
        </>
      )}
      {open && (
        <LoginForm />
      )}
    </div>
  </SettingsStyled>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Settings;
