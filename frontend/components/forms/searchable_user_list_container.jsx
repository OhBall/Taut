import { connect } from 'react-redux';

import SearchableUserList from './searchable_user_list';
import { selectUser, selectUsers, deselectUser } from '../../actions/ui_actions';
import { EDIT_CHANNEL_MODAL } from '../../actions/modal_actions.js';

const mapStateToProps = state =>{
  const selectedId = state.ui.sidebar.selectedId;
  const selectedChannel = state.entities.channels[selectedId];
  const modalType = state.ui.modal;
  const prevUserIds = selectedChannel.user_ids;
  return {
    users: state.entities.users,
    selectedUsers: state.ui.selectedUsers,
    currentUserId: state.session.id,
    prevUserIds,
    modalType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectUser: userId => dispatch(selectUser(userId)),
    deselectUser: userId => dispatch(deselectUser(userId)),
    selectUsers: userIds => dispatch(selectUsers(userIds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchableUserList);
