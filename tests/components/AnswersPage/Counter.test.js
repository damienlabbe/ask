import { expect } from 'chai';
import React from 'react';

// équivalent du render de react-dom, permet de simuler un rendu d'un composant pendant nos tests
import { shallow } from 'enzyme';

import Counter from 'src/components/AnswersPage/Answer/Counter';

/*
  pour se focaliser provisoirement sur une série de test on peut mettre `only`
  pour passer un test pas encore défini on peut utiliser `skip`
*/
// describe.only('<Home />', () => {
//   it.skip('test pas encore écrit');
// });

describe.only('Composant Counter', () => {
  it.skip('test pas encore écrit');
});
