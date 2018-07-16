//will have access to ui/currentConversationable_id and type as props
//will have a willReceiveProps function
// that checks to see if either of those change.

import React from 'react';

import MessageList from './message_list_container';
import MessageForm from './message_form_container';
import ModalConductor from '../modals/modal_conductor';

const Messenger = (props) => {
  return (
    <div className='messenger'>
      <ModalConductor />
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default Messenger;
