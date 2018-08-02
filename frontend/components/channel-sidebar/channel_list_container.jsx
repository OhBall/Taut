import { connect } from 'react-redux';

import ChannelList from './channel_list';
import { createChannelModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    channels: state.entities.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChannelModal: () => dispatch(createChannelModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);
