import { expect } from 'chai';

import answerReducer, { initialState } from 'src/reducers/answer';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive,
// - une fonction de rappel contenant le contenu de ce chapitre
describe('reducer for answer', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaine de caractère descriptive,
    // - une fonction de rappel contenant le contenu de ce chapitre
    // on fait l'assertion grâce à chai
    expect(answerReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(answerReducer()).to.be.an('object');
    expect(answerReducer()).to.be.eql(initialState);
  });
});

// executions avec actions
describe('with actions', () => {
  it('should return a modified state when receive SAVE_ANSWER', () => {

  });
  it('should return a modified state when receive FETCH_POST_ANSWER', () => {

  });
  it('should return a modified state when receive CHANGE_SORT', () => {

  });
  it('should return a modified state when receive FETCH_ANSWERS', () => {

  });
  it('should return a modified state when receive FETCH_ANSWER_SCORE', () => {

  });
  it('should return a modified state when receive CHANGE_ANSWER_VALUE', () => {

  });
  it('should return a modified state when receive INCREMENT_COUNTER_ANSWER', () => {

  });
  it('should return a modified state when receive DECREMENT_COUNTER_ANSWER', () => {

  });
});
