import styled from 'styled-components';


const AppStyled = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;


  background-image: linear-gradient(top, rgb(2,78,116) 0%, rgb(0,2,3) 50%, rgb(0,2,3) 100%);
background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgb(2,78,116)), color-stop(0.5, rgb(0,2,3)), color-stop(1, rgb(0,2,3)));
background-image: -moz-linear-gradient(top, rgb(2,78,116) 0%, rgb(0,2,3) 50%, rgb(0,2,3) 100%);
background-image: -o-linear-gradient(top, rgb(2,78,116) 0%, rgb(0,2,3) 50%, rgb(0,2,3) 100%);
background-image: -ms-linear-gradient(top, rgb(2,78,116) 0%, rgb(0,2,3) 50%, rgb(0,2,3) 100%);
`;

export default AppStyled;
