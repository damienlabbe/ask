// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant question
const QuestionStyled = styled.div`
  margin: 0rem 0rem 1rem;
  width: 99%;
  background-color: #fff;
  color: black;
  border-radius: 9px;
  height: 20%;


  .question-container {
    display: flex;
    padding-left: 0.5px;
    
  }


  .question {
    padding: 0.6rem 0rem .8rem;
    color: black;
    font-size: 1.2rem;
  }

  .text {
    margin: 0 0 0 .7rem;
    text-align: left;
    width:100%;

    &:hover {
      color: black;
    }
  }

  .answer-container {
    width: 100%;
    text-align: right;

    .answer-number {
      font-size: 0.8rem;
      padding: .5rem;
    }
  }

  .tag-container {

    width: 100%;
    text-align: right;

    .tag {
      background-color: #E9C46A;
      border-top-right-radius: 3px;
      font-weight: bold;
      padding: 0.6rem;
      display:inline-block;
      font-size: .8rem;
      color: #fff;
    }
  }

  .separator {
    width: 150px;
    border-top: 1px solid #5FA8D3;
    padding: 0rem 0rem;
  }

  .author {
    color: black;
    font-size: .8rem;
    padding: .5rem 0rem;
    }
`;

// == Export
export default QuestionStyled;
