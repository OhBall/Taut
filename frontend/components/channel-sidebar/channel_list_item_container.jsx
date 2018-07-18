import { connect } from 'react-redux';

import ChannelListItem from './channel_list_item';
import { receiveMessage } from '../../actions/message_actions';

const mapDispatchToProps = dispatch => {
  return {
    receiveMessage: (message) => dispatch(receiveMessage(message)),
  };
};

export default connect(null, mapDispatchToProps)(ChannelListItem);
