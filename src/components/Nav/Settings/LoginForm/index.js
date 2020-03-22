// == Import npm
import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';

// == Import locaux
// import de la feuille de style associée
import LoginFormStyled from './LoginFormStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure d'un login
const LoginForm = () => (
  <LoginFormStyled>
    <Form>
      <Form.Field>
        <label>
          Email
          <Input type="email" placeholder="Email" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Password
          <Input type="password" placeholder="Mot de passe" />
        </label>
      </Form.Field>
      <Button
        className="btnconnect"
        type="submit"
      >
        Ok
      </Button>
    </Form>
  </LoginFormStyled>
);

// == Export
export default LoginForm;
