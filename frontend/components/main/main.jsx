import React from 'react';

import ChannelSidebar from '../channel-sidebar/channel_sidebar_container';
import Messenger from '../messenger/messenger_container';

const Main = props => {
  return (
    <div className='main'>
      <ChannelSidebar />
      <Messenger />
    </div>
  );
};

export default Main;
