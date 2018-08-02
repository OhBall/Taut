import { connect } from 'react-redux';

import DmListItem from './dm_list_item';
import { receiveMessage } from '../../actions/message_actions';
import { selectChannel } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    users: state.entities.users,
    currentUserId: state.session.id,
    selectedId: state.ui.sidebar.selectedId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectChannel: id => dispatch(selectChannel(id)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DmListItem);
