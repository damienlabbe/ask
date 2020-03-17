import React from 'react';

import MainStyled from './MainStyled';
import Question from './Question';

const Main = () => (
  <MainStyled>
    <button className="addQuestion" type="submit">New question</button>
    <Question />
    <Question />
    <Question />
    <Question />
  </MainStyled>

);

export default Main;

