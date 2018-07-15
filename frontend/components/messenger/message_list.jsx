import React from 'react';

import MessageListItem from './message_list_item';

class MessageList extends React.Component{

  componentDidMount() {
    this.props.requestMessages();
    this.props.createChannelSubscription(null, this.props.receiveMessage);
    this.props.requestAllUsers();
  }

  componentWillReceiveProps(newProps){

  }

  render(){
    const { messages } = this.props;
    const messageEls = Object.values(messages).map( message => {
      const user = this.props.users[message.user_id];
      return <MessageListItem message={message} user={user}/>;
    });
    return(
      <ul className={'message-list'}>
        {messageEls}
      </ul>
    );

  }

}

export default MessageList;
