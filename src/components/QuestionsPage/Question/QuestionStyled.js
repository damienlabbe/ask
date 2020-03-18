import styled from 'styled-components';

const QuestionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 20%;
  border: 1px solid grey;
  margin: 0.5rem;
  background-color:#3c6382;
  box-shadow: 10px 5px 5px black;

  .question {
    font-size: 1.1rem;
    padding: 1rem 0.2rem;
    
  }

  .btn {
    height: 100%; 
  }
  
  .text {
    text-align: left;
    width:70%;
  }

  .author {
    color: black;
    font-size: .8rem;
    padding: .2rem;
  }

`;

export default QuestionStyled;
