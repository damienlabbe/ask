import React from 'react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';

import { Button } from 'semantic-ui-react';
import QuestionStyled from './QuestionStyled';
import Counter from './Counter';


const Question = () => (
  <QuestionStyled>
    <Counter />
    <a className="text">
      <p className="tag">INFORMATIQUE</p>
      <h1 className="question">Travailler avec Damien, Nicolas ou Thomas ?</h1>
      <p className="author">posté par Vanessa, il y a 10min</p>
    </a>
    <NavLink
      activeClassName="selected"
      to="/Answer"
      exact
    >
      <Button className="btn" type="submit">
        Réponds!
      </Button>
    </NavLink>
  </QuestionStyled>
);

export default Question;
