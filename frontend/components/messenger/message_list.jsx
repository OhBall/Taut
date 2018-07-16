import React from 'react';

import MessageListItem from './message_list_item';

class MessageList extends React.Component{

  componentDidMount() {
    this.props.requestMessages();
    this.props.createChannelSubscription(null, this.props.receiveMessage);
    this.props.requestAllUsers();
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
      </ul>
    );

  }

}

export default MessageList;
