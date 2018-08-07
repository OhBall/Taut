import React from 'react';

import ChannelListItem from './channel_list_item_container';

class ChannelList extends React.Component{

  createChannelEls(convos){
    const channels = Object.values(convos).filter(
      convo => !convo.is_dm
    );
    const channelEls = channels.map(
      channel => <ChannelListItem key={channel.id} channel={channel} />
    );
    return channelEls;
  }

  render(){
    const channelEls = this.createChannelEls(this.props.channels);

    return (
      <ul className='channel-list'>
        <header onClick={this.props.createChannelModal}>
          Channels
          <span>&#x2295;</span>
        </header>
        {channelEls}
      </ul>
    );
  }

}

export default ChannelList;
