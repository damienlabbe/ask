import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

import QuestionStyled from './QuestionStyled';
import Counter from './Counter';


const Question = () => (
  <QuestionStyled>
    <Counter />
    
    <NavLink
      activeClassName="selected"
      exact
      to="/Answer"
      className="text"
    >
    <p className="tag">INFORMATIQUE</p>
    <h1 className="question">Travailler avec Damien, Nicolas ou Thomas ?</h1>
    <p className="author">posté par Vanessa, il y a 10min</p>
    </NavLink>
  </QuestionStyled>
);

export default Question;
