import React from 'react';

import ChannelList from './channel_list_container';
import DmList from '../dm-list/dm_list_container';

class ConversationSidebar extends React.Component{

  componentDidMount(){
    this.props.requestChannels();
  }

  render(){
    const { currentUser, logout } = this.props;
    
    return (
      <section className='channel-sidebar'>
        <header>
          <h1>{currentUser.username}</h1>
          <button onClick={logout}>Log Out</button>
        </header>
        <ChannelList />
        <DmList />
      </section>
    );
  }

}

export default ConversationSidebar;
