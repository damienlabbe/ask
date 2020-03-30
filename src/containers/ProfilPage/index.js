// == Import : npm
import { connect } from 'react-redux';

import { changeValue } from 'src/actions/signIn';
import { deleteUser, disconnectAction, modifyUser } from 'src/actions/login';
import { fetchQuestions } from 'src/actions/questions';


// == Import : local
import ProfilPage from 'src/components/ProfilPage';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  iduser: state.login.user.id,
  pseudo: state.login.user.pseudo,
  email: state.login.user.email,
  created_at: state.login.user.created_at,
  questions: state.questions.list,
  signIn: state.signIn,
});

/* === Actions modification ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => {
    dispatch(deleteUser(id));
  },
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
  },

  disconnectAction: () => {
    dispatch(disconnectAction());
  },

  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },

  modifyUser: (id) => {
    dispatch(modifyUser(id));
  },

});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
