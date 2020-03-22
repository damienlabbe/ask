// == Import npm
import React from 'react';
import { Button } from 'semantic-ui-react';

// == Import locaux
// Import des datas en dur Question avec les tags et l'auteur associé
import questionsData from 'src/data/questions';
// Import de la feuille de style associée
import QuestionsPageStyled from './QuestionsPageStyled.js';
// Import de la fonction question
import Question from './Question';

// == Composant
// ici on affiche la fonction qui définit la structure du formulaire affichant les questions
const QuestionsPage = () => (
  <QuestionsPageStyled>
    <Button className="addQuestion" type="submit">New question</Button>
    {questionsData.map((question) => (
      <Question key={question.id} {...question} />
    ))}
  </QuestionsPageStyled>
);

// == Export
export default QuestionsPage;
