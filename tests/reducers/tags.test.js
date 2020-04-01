import { expect } from 'chai';

import tagsReducer, { initialState } from 'src/reducers/tags';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive,
// - une fonction de rappel contenant le contenu de ce chapitre
describe('reducer for tags', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaine de caractère descriptive,
    // - une fonction de rappel contenant le contenu de ce chapitre
    // on fait l'assertion grâce à chai
    expect(tagsReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(tagsReducer()).to.be.an('object');
    expect(tagsReducer()).to.be.eql(initialState);
  });
});

// executions avec actions
describe('with actions', () => {
  it('should return a modified state when receive FETCH_TAGS', () => {

  });
  it('should return a modified state when receive SAVE_TAGS', () => {

  });
});
