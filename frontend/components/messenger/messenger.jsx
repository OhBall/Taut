//will have access to ui/currentConversationable_id and type as props
//will have a willReceiveProps function
// that checks to see if either of those change.

import React from 'react';

import MainNavbar from './navbar/main_navbar_container';
import MessageList from './message_list_container';
import MessageForm from './message_form_container';

const Messenger = (props) => {
  return (
    <div className='messenger'>
      <MainNavbar />
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default Messenger;
