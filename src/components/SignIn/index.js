import React from 'react';
import { Icon, Input, Form, Checkbox, Button } from 'semantic-ui-react';


const SignIn = () => (
  <div>
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
        <Input placeholder="Email">
          <Icon name="at" />
          <input />
        </Input>
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
      <Button animated="vertical">
        <Button.Content visible type="submit">Je m'inscris</Button.Content>
        <Button.Content hidden type="submit"> Go!</Button.Content>
      </Button>
    </Form>
  </div>

);


export default SignIn;
