// == Import npm
import React from 'react';
// on importe la route de navigation
import { NavLink } from 'react-router-dom';

// == Import locaux
// import de la feuille de style associée
import SortButtonsStyled from './SortButtonsStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure des boutons new et best
const SortButtons = () => (
  <SortButtonsStyled>
    <NavLink
      activeClassName="selected"
      to=""
      exact
    >
      <button type="button" className="btn">New</button>
    </NavLink>
    <NavLink
      activeClassName="selected"
      to=""
      exact
    >
      <button type="button" className="btn">Best</button>
    </NavLink>
  </SortButtonsStyled>
);

// == Export
export default SortButtons;
