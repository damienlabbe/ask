import React from 'react';

import QuestionStyled from './QuestionStyled';
import Counter from './Counter';

const Question = () => (
  <QuestionStyled>
    <Counter />
    <a className="text">
      <h1 className="question">Travailler avec Damien, Nicolas ou Thomas ?</h1>
      <p className="author">posté par Vanessa, il y a 10min</p>
    </a>
    <div>
      <button className="btn" type="submit">
        Réponds!
      </button>
    </div>
  </QuestionStyled>

);

export default Question;
