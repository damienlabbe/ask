import { expect } from 'chai';

import footerReducer, { initialState } from 'src/reducers/footer';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive,
// - une fonction de rappel contenant le contenu de ce chapitre
describe('reducer for footer', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaine de caractère descriptive,
    // - une fonction de rappel contenant le contenu de ce chapitre
    // on fait l'assertion grâce à chai
    expect(footerReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(footerReducer()).to.be.an('object');
    expect(footerReducer()).to.be.eql(initialState);
  });
});

// executions avec actions
describe('with actions', () => {
  it('should return a modified state when receive TOGGLE_OPEN_MODAL', () => {
  
  });
});
