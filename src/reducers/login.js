import { TOGGLE_OPEN } from 'src/actions';
// import { getNextId } from 'src/selectors';

const initialState = {
  open: false,
  isLogged: false,
};

// reducer = traducteur d'une intention/action vers une modification du state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // je déclare une nouvelle liste avec les actuels et le nouveau
    /*case ADD_TOGGLE_OPEN: {
      const newToggleOpen = [
        ...state.toggleOpen,
        action.toggleOPen,
      ];*/
    // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;
