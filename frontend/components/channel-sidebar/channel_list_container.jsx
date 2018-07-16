import { connect } from 'react-redux';

import ChannelList from './id_list';
import { fetchChannels,
         createChannel,
         deleteChannel } from '../actions/channel_actions';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels),
    createChannel: channel => dispatch(createChannel(channel)),
    deleteChannel: id => dispatch(deleteChannel(id)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);
