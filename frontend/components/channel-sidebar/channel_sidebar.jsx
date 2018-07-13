import React from 'react';

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
      </section>
    );
  }

}

export default ConversationSidebar;
