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
  open: PropTypes.bool,
  isLogged: PropTypes.bool,
  toggleForm: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  open: false,
  isLogged: false,
};


export default Settings;
