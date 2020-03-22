// == Import npm
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant QuestionsPage
const QuestionsPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height:69%;

  .addQuestion {
    margin: 2rem;
    width: 10rem;
    padding: 1rem;
    font-size: 1rem;
  }
`;

// == Export
export default QuestionsPageStyled;
