import { expect } from 'chai';
import React from 'react';

// équivalent du render de react-dom, permet de simuler un rendu d'un composant pendant nos tests
import { shallow } from 'enzyme';

import Header from 'src/components/Header';

/*
  pour se focaliser provisoirement sur une série de test on peut mettre `only`
  pour passer un test pas encore défini on peut utiliser `skip`
*/
// describe.only('<Home />', () => {
//   it.skip('test pas encore écrit');
// });

describe.only('Composant Header', () => {
  it.skip('test pas encore écrit');
});
