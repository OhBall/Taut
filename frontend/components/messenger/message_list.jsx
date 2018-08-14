import React from 'react';

import MessageListItem from './message_list_item';

class MessageList extends React.Component{

  constructor(props){
    super(props);
    this.overflow_div = <div id='overflow-div'></div>;
  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.selectedId !== newProps.selectedId){
      this.props.requestMessages(newProps.selectedId);
    }
  }

  componentDidUpdate(){
    const { selectedId, receiveMessage } = this.props;
    document.getElementById('overflow').scrollIntoView({ behavior: "smooth" });
  }

  render(){
    const { messages, selectedId, users, currentUserId } = this.props;
    const relevantMessages = Object.values(messages).filter( message => {
      return message.conversationable_id === selectedId;
    });
    const messageEls = relevantMessages.map( message => {
      const user = users[message.user_id];
      return (
        <MessageListItem
          key={message.id}
          message={message}
          user={user}
          currentUserId={currentUserId} />
      );
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
