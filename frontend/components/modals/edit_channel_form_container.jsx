import { connect } from 'react-redux';

import ChannelFormModal from './channel_form_modal';
import { editChannel } from '../../actions/channel_actions';
import { clearModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const selectedId = state.ui.sidebar.selectedId;
  const selectedConvo = state.entities.channels[selectedId];
  const { id, name, description } = selectedConvo;

  return {
    formType: 'Edit',
    id,
    name,
    description,
    private: selectedConvo.private,
    selectedUsers: state.ui.selectedUsers,
    errors: state.errors.channel,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: (channel, userIds) => dispatch(editChannel(channel, userIds)),
    clearModal: () => dispatch(clearModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelFormModal);
