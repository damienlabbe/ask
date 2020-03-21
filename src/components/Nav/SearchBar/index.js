import React from 'react';
import { Input, Form } from 'semantic-ui-react';

import SearchBarStyled from './SearchBarStyled';

const SearchBar = () => (
  <SearchBarStyled>
    <Form>
      <Input
        icon="search"
        type="text"
        placeholder="Recherche..."
        className="searchbar"
      />
    </Form>
  </SearchBarStyled>
);

export default SearchBar;
