import styled from 'styled-components';

const AppStyled = styled.div`
color:${props=> props.theme.fg};
background-color: ${props => props.theme.bg};
`;

export default AppStyled;
