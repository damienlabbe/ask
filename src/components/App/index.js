// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import SignIn from 'src/components/SignIn';

import theme from 'src/assets/styles/theme';
import AppStyled from './AppStyled';


// == Composant
const App = () => (
  <AppStyled theme={theme}>
    <Header />
    <>
      <route path="/">
        <Nav />
        <HomePage />
      </route>
      <route path="/sign">
        <SignIn />
      </route>
    </>
    <Footer />
  </AppStyled>
);

// == Export
export default App;
