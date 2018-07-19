import React from 'react';

import MessageListItem from './message_list_item';

class MessageList extends React.Component{

  constructor(props){
    super(props);
    this.overflow_div = <div id='overflow-div'></div>;
  }

  componentDidMount() {
    const { selectedId, receiveMessage } = this.props;
    this.props.requestMessages();
    this.props.requestAllUsers();
  }

  componentDidUpdate(){
    const { selectedId, receiveMessage } = this.props;
    document.getElementById('overflow').scrollIntoView({behavior: "smooth"});
  }

  render(){
    const { messages } = this.props;
    const relevantMessages = Object.values(messages).filter( message => {
      return message.conversationable_id === this.props.selectedId;
    });
    const messageEls = relevantMessages.map( message => {
      const user = this.props.users[message.user_id];
      return <MessageListItem
                key={message.id}
                message={message}
                user={user}
                currentUserId={this.props.currentUserId} />;
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
