import React from 'react';
import { Button } from 'semantic-ui-react';


import QuestionsPageStyled from './QuestionsPageStyled.js';
import Questions from './Questions';

const QuestionsPage = () => (

  <QuestionsPageStyled>
    <Button className="addQuestion" type="submit">New question</Button>
    <Questions />
    <Questions />
    <Questions />
    <Questions />
  </QuestionsPageStyled>

);

export default QuestionsPage;
