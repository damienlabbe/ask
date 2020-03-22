// == Import npm 
import React from 'react';
// import de router-dom afin d'entourer les composants
import { Route, Switch } from 'react-router-dom';

// == Import locaux
// Import de la fonction header
import Header from 'src/components/Header';
// Import de la fonction Nav
import Nav from 'src/components/Nav';
// Import de la fonction QuestionsPage
import QuestionsPage from 'src/components/QuestionsPage';
// Import de la fonction Footer
import Footer from 'src/components/Footer';
// Import de la fonction SignIn
import SignIn from 'src/components/SignIn';
// Import de la fonction AnswersPage
import AnswersPage from 'src/components/AnswersPage';
// Import de la feuille de theme
import theme from 'src/assets/styles/theme';
// import de la feuille de style associée
import AppStyled from './AppStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de l'application ASK!
const App = () => (
  <AppStyled theme={theme}>
    <Header />
    <Switch>
      <Route key="3" path="/Answer">
        <Nav />
        <AnswersPage />
      </Route>
      <Route key="2" path="/signIn">
        <SignIn />
      </Route>
      <Route key="1" path="/">
        <Nav />
        <QuestionsPage />
      </Route>
    </Switch>
    <Footer />
  </AppStyled>
);

// == Export
export default App;
