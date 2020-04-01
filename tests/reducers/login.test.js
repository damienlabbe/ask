import { expect } from 'chai';

import loginReducer, { initialState } from 'src/reducers/login';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive,
// - une fonction de rappel contenant le contenu de ce chapitre
describe('reducer for login', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaine de caractère descriptive,
    // - une fonction de rappel contenant le contenu de ce chapitre
    // on fait l'assertion grâce à chai
    expect(loginReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(loginReducer()).to.be.an('object');
    expect(loginReducer()).to.be.eql(initialState);
  });
});

// executions avec actions
describe('with actions', () => {
  it('should return a modified state when receive CHANGE_USER', () => {

  });
  it('should return a modified state when receive CHANGE_VALUE_LOGIN', () => {

  });
  it('should return a modified state when receive DISCONNECT_ACTION', () => {

  });
  it('should return a modified state when receive DELETE_USER', () => {

  });
});
