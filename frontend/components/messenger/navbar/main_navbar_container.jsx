import { connect } from 'react-redux';

import MainNavbar from './main_navbar';
import { deleteChannel } from '../../../actions/channel_actions';
import { editChannelModal } from '../../../actions/modal_actions';

const mapStateToProps = state => {
  const selectedId = state.ui.sidebar.selectedId;
  const selectedConvo = state.entities.channels[selectedId] ||
   {name: '', description: ''};
  return {
    selectedConvo,
    users: state.entities.users,
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    editChannelModal: () => dispatch(editChannelModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
