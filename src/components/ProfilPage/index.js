// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import {
  Button,
  Icon,
  Modal,
  Form,
  Input,
} from 'semantic-ui-react';


// import de la route de navigation

// import du frameworks
import Question from 'src/components/QuestionsPage/Question';
// import du composant styled du profil page
import ProfilPageStyled from './ProfilPageStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de profilpage
const ProfilPage = ({
  pseudo,
  email,
  created_at: createdAt,
  iduser,
  questions,
  changeValue,
  signIn,
  deleteUser,
  disconnectAction,
}) => (
  <ProfilPageStyled>
    {pseudo && (
      <>
        <aside className="profil">
          <h1 className="titles">Mon profil</h1>
          <p className="profil_name">{pseudo}</p>
          <p className="profil_email"><Icon name="envelope" />{email}</p>
          <p className="bbday"><Icon name="birthday cake" />JJ/MM/AAAA</p>
          <p>
            <Icon name="calendar check" />
            Inscrit depuis le: <Moment locale="fr" format="DD-MM-YYYY">{createdAt}</Moment>
          </p>
          <Modal
            trigger={<Button><Icon name="edit" /> Modifier</Button>}
            size="tiny"
            closeIcon
          >
            <Modal.Header>Modification</Modal.Header>
            <Modal.Content>
              <Form type="submit">
                <p>{pseudo}</p>
                <Form.Field>
                  <label>
                    Email
                    <Input
                      icon="at"
                      type="text"
                      name="email"
                      placeholder={email}
                      required
                      value={signIn.password}
                      onChange={(event) => {
                        changeValue(event.target.value, event.target.name);
                      }}
                    />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Mot de passe
                    <Input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      required
                      value={signIn.password}
                      onChange={(event) => {
                        changeValue(event.target.value, event.target.name);
                      }}
                    />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Confirmer votre mot de passe
                    <Input
                      type="password"
                      name="confirmedPassword"
                      placeholder="Confirmer votre mot de passe"
                      required
                      value={signIn.confirmedPassword}
                      onChange={(event) => {
                        changeValue(event.target.value, event.target.name);
                      }}
                    />
                  </label>
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button
                positiveicon="checkmark"
                content="Valider"
              />
              <Button negative>Annuler</Button>
            </Modal.Actions>
          </Modal>

          <Modal
            trigger={<Button type="button"><Icon name="trash alternate outline" />Se désinscrire</Button>}
            size="mini"
            closeIcon
            closeOn
          >
            <Modal.Header>Se désinscrire</Modal.Header>
            <Modal.Content>
              <p>Supprimer mon compte ?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                type="button"
                positiveicon="checkmark"
                content="Valider"
                onClick={() => {
                  deleteUser();
                  disconnectAction();
                }}
              />
              <Button negative>Annuler</Button>
            </Modal.Actions>
          </Modal>
        </aside>
        <article className="questions">
          <h1 className="titles">Mes question</h1>
          {questions.map((question) => (
            question.author.id === iduser && (
              <Question className="question" key={question.id} {...question} />
            )
          ))}
        </article>
      </>
    )}
    {!pseudo && (
      <Redirect to="/" />
    )}
  </ProfilPageStyled>
);


ProfilPage.propTypes = {
  pseudo: PropTypes.string,
  email: PropTypes.string,
  created_at: PropTypes.string,
  questions: PropTypes.array.isRequired,
  iduser: PropTypes.number,
  changeValue: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  signIn: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmedPassword: PropTypes.string.isRequired,
    checkbox: PropTypes.bool.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
  disconnectAction: PropTypes.func.isRequired,
};

ProfilPage.defaultProps = {
  pseudo: '',
  email: '',
  created_at: '',
  iduser: '',

};

// == Export
export default ProfilPage;
