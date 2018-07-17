import React from 'react';

import ChannelListItem from './channel_list_item';
import { createChannelSubscriptions } from '../../utils/channel_api_util';

class ChannelList extends React.Component{

  componentDidMount(){
    this.props.requestChannels().then(
      () =>  createChannelSubscriptions(
        this.props.channels,
         this.props.receiveMessage
       )
    );
  }

  render(){
    const channelEls = Object.values(this.props.channels).map( channel => {
      const selected = channel.id === this.props.selectedId ? 'selected' : '';
      return <ChannelListItem
        key={channel.id}
        channel={channel}
        selected={selected}
        selectChannel={this.props.selectChannel}/>;
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
