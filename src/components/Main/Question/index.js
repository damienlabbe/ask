import React from 'react';

import QuestionStyled from './QuestionStyled';
import Counter from './Counter';

const Question = () => (
  <QuestionStyled>
    <Counter />
    <a>
      <h1>Question</h1>
      <p>posté par User23, il y a 2min</p>
    </a>
    <div>
      <button type="submit">Réponds!</button>
    </div>
  </QuestionStyled>

);

export default Question;
