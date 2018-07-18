import React from 'react';

import { createChannelSubscription } from '../../utils/channel_api_util';


class ChannelListItem extends React.Component {

  constructor(props){
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount(){
    const { channel, receiveMessage } = this.props;
    createChannelSubscription(channel.id, receiveMessage);
  }

  handleSelection(){
    const id = this.props.channel.id;
    this.props.selectChannel(id);
  }

  render() {
    const { channel, selected, selectChannel } = this.props;

    const hideOnPublic = channel.private ? '' : 'hidden';
    const hideOnPrivate = channel.private ? 'hidden' : '';

    return (
      <li className={selected} onClick={this.handleSelection}>
        <span className={hideOnPrivate}>#</span>
        <span className={`lock ${hideOnPublic}`}>&#128274;</span>
        <span>{channel.name}</span>
      </li>
    );
  }
}

export default ChannelListItem;
