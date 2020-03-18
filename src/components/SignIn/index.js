import React from 'react';
import { Input, Form, Checkbox, Button, Icon } from 'semantic-ui-react';

import SignInStyled from './SignInStyled';


const SignIn = () => (
  <SignInStyled>
    <Button type="submit">Accueil</Button>
    <h1>Inscription</h1>
    <Form>
      <Form.Field>
        <label>Pseudo</label>
        <Input type="text" placeholder="Pseudo" />
      </Form.Field>
      <Form.Field>
        <label>Date de naissance</label>
        <Input type="date" placeholder="Date de naissance" />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Input icon="at" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Mot de passe</label>
        <Input type="password" placeholder="Mot de passe" />
      </Form.Field>
      <Form.Field>
        <label>Confirmer votre mot de passe</label>
        <Input type="password" placeholder="Confirmer votre mot de passe" />
      </Form.Field>
      <Form.Field>
        <label>
          <Checkbox label="J'accepte de respecter la charte du site" />
        </label>
      </Form.Field>
      <Button type="submit">Je m'inscris</Button>
    </Form>
  </SignInStyled>

);


export default SignIn;
