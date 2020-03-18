import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

import SearchStyled from './SearchStyled';

const Search = () => (
  <SearchStyled>
    <form>
      <Input  type="text" placeholder="Search..." />
    </form>
  </SearchStyled>
);

export default Search;
