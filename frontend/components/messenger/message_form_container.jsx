import { connect } from 'react-redux';

import MessageForm from './message_form';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  };
};

export default connect(mapStateToProps)(MessageForm);
