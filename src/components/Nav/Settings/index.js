// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
// on importe la route de navigation
import { NavLink } from 'react-router-dom';

// == Import locaux
// Import de la fonction loginform
import LoginForm from 'src/components/Nav/Settings/LoginForm';
// import de la feuille de style associée
import SettingsStyled from './SettingsStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure du login
const Settings = ({ open, isLogged, toggleForm }) => (
  <SettingsStyled>
    <div>
      {isLogged && (
        <div>
          <Button type="button" className="btn">Déconnexion</Button>
          <Navlink 
            activeClassName="btn"
            className="btn"
            exact
            to="/Profil"
          >
            Profil
          </Navlink>
        </div>
      )}
      {!isLogged && (
        <div>
          {!open && (
            <>
              <Button
                type="button"
                className="btn"
                onClick={toggleForm}
              >
                Connection
              </Button>
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
      )}
    </div>
  </SettingsStyled>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

// == Export
export default Settings;
