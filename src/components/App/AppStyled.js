import styled from 'styled-components';


const AppStyled = styled.div`
  color:${(props) => props.theme.secondColor};
  background-color: ${(props) => props.theme.secondColor};
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;

export default AppStyled;
