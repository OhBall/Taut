import React from 'react';

import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestChannels();
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
        <header>Channels</header>
        {channelEls}
      </ul>
    );
  }

}

export default ChannelList;
