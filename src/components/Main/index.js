import React from 'react';

import MainStyled from './MainStyled';
import Question from './Question';

const Main = () => (
  <MainStyled>
    <button type="submit">New question</button>
    <section>
      <Question />
    </section>
  </MainStyled>

);

export default Main;

