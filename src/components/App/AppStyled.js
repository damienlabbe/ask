import styled from 'styled-components';


const AppStyled = styled.div`
  color:${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  height: 100vh;
`;

export default AppStyled;
