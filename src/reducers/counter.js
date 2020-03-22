import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'src/actions';
// import { getNextId } from 'src/selectors';

const initialState = {
  name: 'The Counter',
  value: 0,
};

// reducer = traducteur d'une intention/action vers une modification du state
const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    // je déclare une nouvelle liste avec les actuels et le nouveau
    // il manque ceci
    /*case ADD_INCREMENT_COUNTER: {
      const newCounter = [
        ...state.counter,
        action.counter,
      ];
    }
    break;*/
    // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    // je déclare une nouvelle liste avec les actuels et le nouveau
    // il manque ceci
    /*case ADD_DECREMENT_COUNTER: {
      const newCounter = [
        ...state.counter,
        action.counter,
      ];*/
    // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counter;
