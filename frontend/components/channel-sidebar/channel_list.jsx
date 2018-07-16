import React from 'react';

import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component{

  componentWillMount(){
    this.props.fetchChannels();
  }

  componentWillReceiveProps(newProps){
    //// TODO: create selected ui state and map to props
  }

  render(){
    const channelEls = Object.values(this.props.channels).map( channel => {
      return <ChannelListItem key={channel.id} channel={channel} />;
    });

    return (
      <ul className='channel-list'>
        {channelEls}
      </ul>
    );
  }

}

export default ChannelList;
