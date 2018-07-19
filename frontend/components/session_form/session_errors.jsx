import { connect } from 'react-redux';
import Errors from './errors.jsx';

const mapStateToProps = state => {
  const errors = state.errors.session;
  const hidden = errors.length === 0 ? 'hidden' : '';
  return {
    errors,
    hidden,
  };
};

export default connect(mapStateToProps)(Errors);
