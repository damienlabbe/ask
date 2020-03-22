// == Import npm
import React from 'react';
import { Input, Form } from 'semantic-ui-react';

// == Import locaux
// import de la feuille de style associée
import SearchBarStyled from './SearchBarStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure d'une barre de recherche
const SearchBar = () => (
  <SearchBarStyled>
    <Form>
      <Input
        icon="search"
        type="text"
        fluid
        placeholder="Recherche..."
        className="searchbar"
      />
    </Form>
  </SearchBarStyled>
);

// == Export
export default SearchBar;
