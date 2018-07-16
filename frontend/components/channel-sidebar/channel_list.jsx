import React from 'react';

import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component{

  constructor(props){
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount(){
    this.props.requestChannels();
  }

  componentWillReceiveProps(newProps){
    //// TODO: create selected ui state and map to props
  }

  handleSelection(channelId){
    return () => {
      debugger
      this.props.selectChannel(channelId);
    };
  }

  render(){
    const channelEls = Object.values(this.props.channels).map( channel => {
      const selected = channel.id === this.props.selectedId ? 'selected' : '';
      return <ChannelListItem
        key={channel.id}
        channel={channel}
        selected={selected}
        onClick={this.handleSelection(channel.id)}/>;
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
