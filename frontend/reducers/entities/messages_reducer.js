import { merge } from 'lodash';

import { RECEIVE_MESSAGES,
         RECEIVE_MESSAGE } from '../../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const stateCopy = merge ({}, state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge (stateCopy, action.messages);
    case RECEIVE_MESSAGE:
      const { message } = action;
      return merge (stateCopy, {[message.id]: message});
    default:
      return state;
  }
};

export default MessagesReducer;
