// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// on importe la route de navigation
import { NavLink } from 'react-router-dom';

// == Import locaux
// Import de la fonction counter
import Counter from 'src/containers/QuestionsPage/Question/Counter';
// Import de la feuille de style associée
import QuestionStyled from './QuestionStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure d'une question
const Question = ({
  score,
  content,
  author,
  tag,
  created_at: createdAt,
}) => (
  <QuestionStyled>
    <Counter score={score} />
    <NavLink
      activeClassName="selected"
      exact
      to="/Answer"
      className="text"
    >
      <p className="tag">{tag.name}</p>
      <h1 className="question">{content}</h1>
      <p className="author">posté par {author.name}, le {createdAt}</p>
    </NavLink>
  </QuestionStyled>
);

Question.propTypes = {
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
};

// == Export
export default Question;
