// == Import npm
import React from 'react';

// == Import locaux
// on importe la fonction settings
import Settings from 'src/containers/Nav/Settings';
// on importe la fonction searchbar
import SearchBar from './SearchBar';
// on importe la fonction sortbuttons
import SortButtons from './SortButtons';
// import de la feuille de style associée
import NavStyled from './NavStyled';

// == Composant
// ici on affiche la fonction qui renvoi le formulaire de la structure de navigation
const Nav = () => (
  <NavStyled>
    <SortButtons />
    <SearchBar />
    <Settings />
  </NavStyled>
);

// == Export
export default Nav;
