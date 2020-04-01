import { expect } from 'chai';

import searchBarReducer, { initialState } from 'src/reducers/searchBar';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive,
// - une fonction de rappel contenant le contenu de ce chapitre
describe('reducer for searchBar', () => {
  // la structure du reducer
  describe('structure', () => {
    // je décris un test
    // on passe en arguments :
    // - une chaine de caractère descriptive,
    // - une fonction de rappel contenant le contenu de ce chapitre
    // on fait l'assertion grâce à chai
    expect(searchBarReducer).to.be.a('function');
  });

  it('check initial state', () => {
    expect(searchBarReducer()).to.be.an('object');
    expect(searchBarReducer()).to.be.eql(initialState);
  });
});

// executions avec actions
describe('with actions', () => {
  it('should return a modified state when receive CHANGE_SEARCH_VALUE', () => {

  });
});
