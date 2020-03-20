import styled from 'styled-components';

const LoginStyled = styled.div`
  color: black;

  .btn {
    padding: 0 1rem;
  }

  @media (max-width: 400px) {
    .btn {
      display: flex;
      margin: 0 .2rem;
      padding: .2rem;
    }
  }

  
  .btn:hover {
    color: darkblue;
  }

`;

export default LoginStyled;
