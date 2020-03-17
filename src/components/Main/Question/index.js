import React from 'react';

import QuestionStyled from './QuestionStyled';
import Counter from './Counter';

const Question = () => (
  <QuestionStyled>
    <Counter />
    <a className="text">
      <h1 className="question">Si tu as un dernier jour à vivre ?</h1>
      <p className="author">posté par User23, il y a 2min</p>
    </a>
    <div>
      <button className="btn" type="submit">Réponds!</button>
    </div>
  </QuestionStyled>

);

export default Question;
