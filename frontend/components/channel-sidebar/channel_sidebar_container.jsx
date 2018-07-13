import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import ChannelSidebar from './channel_sidebar';

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  return {
    channels: state.entities.channels,
    currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(ChannelSidebar);
