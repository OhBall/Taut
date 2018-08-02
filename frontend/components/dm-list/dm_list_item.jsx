import React from 'react';
import { createChannelSubscription } from '../../utils/channel_api_util';

class DmListItem extends React.Component{

  constructor(props){
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount(){
    const { dm, receiveMessage } = this.props;
    createChannelSubscription(dm.id, receiveMessage);
  }

  handleSelection(){
    const dm = this.props.dm;
    { this.props.selectChannel(dm.id); }
  }

  render() {
    const { dm, selectChannel, currentUserId, users } = this.props;

    const selected = dm.id === this.props.selectedId ? 'selected' : '';
    const hideOnPublic = dm.private ? '' : 'hidden';
    const hideOnPrivate = dm.private ? 'hidden' : '';

    const otherUsers = dm.user_ids.filter(
       userId => userId !== currentUserId
     ).map( userId => {
       if(users[userId]) return users[userId].username;
     });

    const otherUserCount = (dm.user_ids.length || 1) - 1;
    const countString = otherUserCount <= 1  ? '' :`${otherUserCount}`;


    return (
      <li className={selected} onClick={this.handleSelection}>
        <span>{countString}</span>
        <span>{otherUsers.join(', ')}</span>
      </li>
    );
  }

}

export default DmListItem;
