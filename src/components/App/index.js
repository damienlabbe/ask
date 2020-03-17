// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

import theme from 'src/assets/styles/theme';
import AppStyled from './AppStyled';


// == Composant
const App = () => (
  <AppStyled theme={theme}>
    <Header />
    <Nav />
    <Main />
    <Footer />
  </AppStyled>
);

// == Export
export default App;
