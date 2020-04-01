import { expect } from 'chai';

import signInReducer, { initialState } from 'src/reducers/signIn';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive,
// - une fonction de rappel contenant le contenu de ce chapitre
describe('reducer for signIn', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaine de caractère descriptive,
    // - une fonction de rappel contenant le contenu de ce chapitre
    // on fait l'assertion grâce à chai
    expect(signInReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(signInReducer()).to.be.an('object');
    expect(signInReducer()).to.be.eql(initialState);
  });
});

// executions avec actions
describe('with actions', () => {
  it('should return a modified state when receive CHANGE_VALUE', () => {

  });
  it('should return a modified state when receive CHANGE_CHECKBOX', () => {
    
  });
  it('should return a modified state when receive FETCH_SIGNINUSER', () => {
    
  });
  it('should return a modified state when receive VERIFY_CALLBACK', () => {
    
  });
  it('should return a modified state when receive EXPIRED_CALLBACK', () => {
    
  });
  it('should return a modified state when receive RESET_ISVERIFIED', () => {
    
  });
  it('should return a modified state when receive TOGGLE_OPEN_MODAL', () => {
    
  });
});
