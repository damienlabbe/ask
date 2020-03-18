import React from 'react';
import { Input, Form } from 'semantic-ui-react';

import SearchBarStyled from './SearchBarStyled';

const SearchBar = () => (
  <SearchBarStyled>
    <Form>
      <Input
        icon="search"
        iconPosition="right"
        type="text"
        placeholder="Recherche..."
        fluide
      />
    </Form>
  </SearchBarStyled>
);

export default SearchBar;
