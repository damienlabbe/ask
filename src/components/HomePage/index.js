import React from 'react';
import { Button } from 'semantic-ui-react';

import HomePageStyled from './HomePageStyled';
import Question from './Question';

const HomePage = () => (

  <HomePageStyled>
    <Button className="addQuestion" type="submit">New question</Button>
    <Question />
    <Question />
    <Question />
    <Question />
  </HomePageStyled>

);

export default HomePage;
