import React from 'react';

import MessageListItem from './message_list_item';

class MessageList extends React.Component{

  constructor(props){
    super(props);
    this.overflow_div = <div id='overflow-div'></div>;
  }

  componentDidMount() {
    this.props.requestMessages();
    this.props.createChannelSubscription(null, this.props.receiveMessage);
    this.props.requestAllUsers();
  }

  componentDidUpdate(){
    document.getElementById('overflow').scrollIntoView({behavior: "smooth"});
  }

  render(){
    const { messages } = this.props;
    const relevantMessages = Object.values(messages).filter( message => {
      return message.conversationable_id === this.props.selectedId;
    });
    const messageEls = relevantMessages.map( message => {
      const user = this.props.users[message.user_id];
      return <MessageListItem key={message.id} message={message} user={user}/>;
    });

    return(
      <ul id={'message-list'}>
        {messageEls}
        <div id='overflow' />
      </ul>
    );

  }

}

export default MessageList;
