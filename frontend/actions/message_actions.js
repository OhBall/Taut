import * as MessageApiUtil from  '../utils/messages_api_util.js';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  };
};

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message,
  };
};

export const removeMessage = message => {
  return {
    type: REMOVE_MESSAGE,
    message,
  };
};

export const deleteMessage = id => dispatch => {
  return MessageApiUtil.deleteMessage(id).then(
    message => dispatch(removeMessage(message))
  );
};

export const requestMessages = (channelId) => dispatch => {
  return MessageApiUtil.fetchMessages(channelId).then(
    messages => dispatch(receiveMessages(messages))
  );
};
