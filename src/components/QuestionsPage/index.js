import React from 'react';
import { Button } from 'semantic-ui-react';


import QuestionsPageStyled from './QuestionsPageStyled.js';
import Question from './Question';

const QuestionsPage = () => (

  <QuestionsPageStyled>
    <Button className="addQuestion" type="submit">New question</Button>
    <Question />
  </QuestionsPageStyled>

);

export default QuestionsPage;
