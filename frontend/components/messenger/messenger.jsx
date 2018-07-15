//will have access to ui/currentConversationable_id and type as props
//will have a willReceiveProps function
// that checks to see if either of those change.

import React from 'react';

import MessageList from './message_list_container';
import MessageForm from './message_form';

const Messenger = (props) => {

  return (
    <div className='messenger'>
      <MessageList />
      <MessageForm />
    </div>
  );

};

export default Messenger;
