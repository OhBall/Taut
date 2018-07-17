import React from 'react';

import ChannelSidebar from '../channel-sidebar/channel_sidebar_container';
import Messenger from '../messenger/messenger';
import ModalConductor from '../modals/modal_conductor';

const Main = props => {
  return (
    <div className='main'>
      <ModalConductor />
      <ChannelSidebar />
      <Messenger />
    </div>
  );
};

export default Main;
