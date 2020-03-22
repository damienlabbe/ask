// == Import npm
import React from 'react';
// on import la route de navigation
import { NavLink } from 'react-router-dom';

// == Import locaux
// import de la feuille de style associée
import HeaderStyled from './HeaderStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure du titre et de la phrase d'accroche
const Header = () => (
  <HeaderStyled>
    <NavLink
      activeClassName="selected"
      to="/"
      exact
      className="title"
    >
      Ask !
    </NavLink>
    <h3 className="title2">Une question ? Just Ask !</h3>
  </HeaderStyled>
);

// == Export
export default Header;
