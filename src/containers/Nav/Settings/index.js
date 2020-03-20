// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Settings from 'src/components/Nav/Settings';

// Action Creators
import { toggleOpen } from 'src/actions';


const mapStateToProps = (state) => ({
  open: state.open,
  isLogged: state.isLogged,
});


const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => {
    dispatch(toggleOpen());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
