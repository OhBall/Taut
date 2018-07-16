import { connect } from 'react-redux';

import ChannelList from './channel_list';
import { requestChannels,
         createChannel,
         deleteChannel } from '../../actions/channel_actions';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestChannels: () => dispatch(requestChannels()),
    createChannel: channel => dispatch(createChannel(channel)),
    deleteChannel: id => dispatch(deleteChannel(id)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);
