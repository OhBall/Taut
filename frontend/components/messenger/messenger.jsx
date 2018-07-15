//will have access to ui/currentConversationable_id and type as props
//will have a willReceiveProps function
// that checks to see if either of those change.

import React from 'react';

import MessageForm from './message_form';

class Messenger extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestMessages();
    this.props.createChannelSubscription(null, this.props.receiveMessage);
  }

  render() {
    return (
      <div className='messenger'>
        This is the messenger component
        <MessageForm />
      </div>
    );
  }

}

export default Messenger;
