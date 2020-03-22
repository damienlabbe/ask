// == Import npm
import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';

// == Import locaux
// import de la feuille de style associée
import AddQuestionFormStyled from './AddQuestionFormStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure d'un login
const AddQuestionForm = () => (
  <AddQuestionFormStyled>
    <Form>
      <Form.Field>
        <label>
          Ecrivez votre question!
          <Input type="text" placeholder="text" />
        </label>
      </Form.Field>
      <Button
        className="btnCategory"
        type="submit"
      >
        Séléctionner votre catégorie
      </Button>
      <Button
        className="btnValidate"
        type="submit"
      >
        Ajouter!
      </Button>
    </Form>
  </AddQuestionFormStyled>
);

// == Export
export default AddQuestionForm;
