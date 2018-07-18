import { connect } from 'react-redux';

import ChannelList from './channel_list';
import {
    requestChannels,
    deleteChannel
  } from '../../actions/channel_actions';

import { selectChannel } from '../../actions/ui_actions';
import { createChannelModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
    selectedId: state.ui.sidebar.selectedId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestChannels: () => dispatch(requestChannels()),
    deleteChannel: id => dispatch(deleteChannel(id)),
    selectChannel: id => dispatch(selectChannel(id)),
    createChannelModal: () => dispatch(createChannelModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);
