import * as MessageApiUtil from  '../utils/messages_api_util.js';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';


export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  };
};

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const requestMessages = () => dispatch => {
  return MessageApiUtil.fetchMessages().then(
    messages => dispatch(receiveMessages(messages)),
    () => console.log('NOOOOO')
  );
};
