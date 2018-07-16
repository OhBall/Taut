import { connect } from 'react-redux';

import MessageForm from './message_form';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    selectedId: state.ui.selectedId,
  };
};

export default connect(mapStateToProps)(MessageForm);
