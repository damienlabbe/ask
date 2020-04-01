import { expect } from 'chai';

import questionsReducer, { initialState } from 'src/reducers/questions';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive,
// - une fonction de rappel contenant le contenu de ce chapitre
describe('reducer for questions', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaine de caractère descriptive,
    // - une fonction de rappel contenant le contenu de ce chapitre
    // on fait l'assertion grâce à chai
    expect(questionsReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(questionsReducer()).to.be.an('object');
    expect(questionsReducer()).to.be.eql(initialState);
  });
});

// executions avec actions
describe('with actions', () => {
  it('should return a modified state when receive FETCH_QUESTIONS', () => {

  });
  it('should return a modified state when receive SAVE_QUESTIONS', () => {

  });
  it('should return a modified state when receive CHANGE_INPUT_VALUE', () => {

  });
  it('should return a modified state when receive FETCH_POST_QUESTION', () => {

  });
  it('should return a modified state when receive CHANGE_SORTED', () => {

  });
  it('should return a modified state when receive INCREMENT_COUNTER', () => {

  });
  it('should return a modified state when receive DECREMENT_COUNTER', () => {

  });
  it('should return a modified state when receive FETCH_QUESTION_SCORE', () => {

  });
});
