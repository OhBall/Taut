import React from 'react';
import ChannelList from './channel_list_container';
import DmList from '../dm-list/dm_list_container';

class ConversationSidebar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {username} = this.props.currentUser;
    return (
      <section className='channel-sidebar'>
        <header>
          <h1>{username}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </header>
        <ChannelList />
        <DmList />
      </section>
    );
  }

}

export default ConversationSidebar;
