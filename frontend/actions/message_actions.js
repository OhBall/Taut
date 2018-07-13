import * as MessageApiUtil from  'messages_api_util.js';

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
