import React from 'react';
import { connect } from 'react-redux';

import ChannelSidebar from '../channel-sidebar/channel_sidebar_container';
import Messenger from '../messenger/messenger';
import ModalConductor from '../modals/modal_conductor';

import { requestPermissions } from '../../actions/permission_actions';

const mapDispatchToProps = dispatch => {
  return {
    requestPermissions: () => dispatch(requestPermissions())
  };
};

class Main extends React.Component {

  componentDidMount(){
    this.props.requestPermissions();
  }

  render(){
    return (
      <div className='main'>
        <ModalConductor />
        <ChannelSidebar />
        <Messenger />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
