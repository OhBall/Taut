import React from 'react';

import ChannelListItem from './channel_list_item_container';

class ChannelList extends React.Component{

  render(){
    const channels = Object.values(this.props.channels).filter(
      convo =>  !convo.is_dm
    );
    const channelEls = channels.map( channel => {
      if (!channel.private || this.props.permissions[channel.id]){
        return <ChannelListItem
                  key={channel.id}
                  channel={channel}
                 />;
      } else {
        return '';
      }
    });

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
