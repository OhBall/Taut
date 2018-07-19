import { connect } from 'react-redux';

import ChannelFormModal from './channel_form_modal';
import { createChannel } from '../../actions/channel_actions';
import { clearModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    formType: 'Create',
    name: '',
    description: '',
    private: false,
    selectedUsers: state.ui.selectedUsers,
    errors: state.errors.channel,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: (channel, userIds) => dispatch(createChannel(channel, userIds)),
    clearModal: () => dispatch(clearModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelFormModal);
