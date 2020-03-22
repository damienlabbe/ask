// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant Counter
const Counterstyled = styled.div`
  text-align: center;
  width: auto;
  height: 100%;

/*on met auto au height pour que la hauteur du bouton s'adapte à l'écran */
  .button {
    width: 100%;
    height: auto; 
  }
`;

// == Export
export default Counterstyled;
