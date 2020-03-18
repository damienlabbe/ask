import React from 'react';

import HomePageStyled from './HomePageStyled';
import Question from './Question';

const HomePage = () => (
  <HomePageStyled>
    <button className="addQuestion" type="submit">New question</button>
    <Question />
    <Question />
    <Question />
    <Question />
  </HomePageStyled>

);

export default HomePage;
