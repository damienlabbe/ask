import styled from 'styled-components';


const AppStyled = styled.div`
  color:${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.primaryColor};
`;

export default AppStyled;
