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
            className="btn"
          >
            Déconnexion
          </NavLink>
          <NavLink
            activeClassName="selected"
            exact
            className="btn"
          >
            Profil
          </NavLink>
        </div>
      )}
      {!open && (
        <>
          <NavLink
            to="/"
            activeClassName="selected"
            exact
            className="btn"
            onClick={toggleForm}
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
