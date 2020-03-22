// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
// on importe la route de navigation
import { NavLink } from 'react-router-dom';

// == Import locaux
// Import de la fonction addquestionform
import AddQuestionForm from 'src/components/QuestionsPage/AddQuestion/AddQuestionForm';
// import de la feuille de style associée
import AddQuestionStyled from './AddQuestionStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure du addquestion
const AddQuestion = ({ open, isLogged, toggleForm }) => (
  <AddQuestionStyled>
    <div>
      {isLogged && (
        <div>
          <Navlink>
            <Button type="button" className="btn">retour à l'accueil</Button>
            <AddQuestionForm />
          </Navlink>
        </div>
      )}
      {!isLogged && (
        <div>
          {!open && (
            <>
              <Button
                type="button"
                className="btn"
                onClick={toggleForm}
              >
                Ajouter une question!
              </Button>
            </>
          )}
            {open && (
              <AddQuestionForm />
            )}
        </div>
      )}
    </div>
  </AddQuestionStyled>
);

AddQuestion.propTypes = {
  open: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

// == Export
export default AddQuestion;
