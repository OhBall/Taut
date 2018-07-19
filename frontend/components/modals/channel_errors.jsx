import { connect } from 'react-redux';
import Errors from '../errors/errors.jsx';

const mapStateToProps = state => {
  const errors = state.errors.channel;
  const hidden = errors.length === 0 ? 'hidden' : '';
  return {
    errors,
    hidden,
  };
};

export default connect(mapStateToProps)(Errors);
