import React from 'react';

import QuestionsStyled from './QuestionsStyled';
import Counter from './Counter';

const Questions = () => (
  <QuestionsStyled>
    <Counter />
    <a className="text">
      <p className="tag">INFORMATIQUE</p>
      <h1 className="question">Travailler avec Damien, Nicolas ou Thomas ?</h1>
      <p className="author">posté par Vanessa, il y a 10min</p>
    </a>
    <div>
      <button className="btn" type="submit">
        Réponds!
      </button>
    </div>
  </QuestionsStyled>

);

export default Questions;
