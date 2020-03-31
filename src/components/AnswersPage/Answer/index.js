// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

// == Import : local
// import du composant styled du réponse
import SortButtons from 'src/components/AnswersPage/SortButtons';
import AnswerStyled from './AnswerStyled';
import Counter from './Counter';


// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de réponse
const Answer = ({
  score,
  content,
  author,
  tag,
  created_at: createdAt,
  answers,
  isLogged,
  fetchPostAnswer,
  changeAnswerValue,
  value,
}) => (
  <AnswerStyled>
    <div className="question-container">
      <Counter score={score} />
      <div className="text">
        <div className="tag-container">
          <p className="tag">{tag.name}</p>
        </div>
        <p className="question">{content}</p>
        <div className="separator" />
        <p className="author">posté par {author.name}, le {createdAt}</p>
        <div className="answer-container">
          <p className="answer-number">{answers.length} réponses</p>
        </div>
      </div>
    </div>
    <div className="container-reponse">
      <div className="reponse-form-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetchPostAnswer();
          }}
          className="answer-form"
        >
          <h3>Poster une réponse :</h3>
          <input
            name="content"
            type="text"
            value={value}
            placeholder="Ajouter votre réponse..."
            onChange={(event) => {
              changeAnswerValue(event.target.value);
            }}
          />
          {isLogged && (
            <button type="submit"><Icon name="paper plane outline" />Publier</button>
          )}
          {!isLogged && (
            <button
              type="button"
              onClick={() => {
                swal('Vous devez vous connecter pour poster des réponse !', '', 'warning');
              }}
            >
              <Icon name="paper plane outline" />
              Publier
            </button>
          )}
        </form>
      </div>
      <div className="answersQuestion-container">
        <SortButtons />
        {answers.map((answer) => (
          <div className="panswer" key={answer.id}>
            <Counter score={answer.score} />
            <div className="answerText">
              <p className="content-text">{answer.content}</p>
              <div className="separator" />
              <p className="author">posté par {answer.author.name}, le {answer.created_at}</p>
            </div>
            <div className="userButton">
              <Icon name="delete" size="large" />
              <Icon name="edit" size="large" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnswerStyled>
);

Answer.propTypes = {
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  fetchPostAnswer: PropTypes.func.isRequired,
  changeAnswerValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
// == Export
export default Answer;
