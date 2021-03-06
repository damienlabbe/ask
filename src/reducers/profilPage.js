import { TOGGLE_OPEN_MODAL } from 'src/actions/profilPage';

export const initialState = {
  open: false,
};

// reducer = traducteur d'une intention/action vers une modification du state
const profilPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN_MODAL:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default profilPage;
