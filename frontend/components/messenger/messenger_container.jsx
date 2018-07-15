import React from 'react';
import { connect } from 'react-redux';

import Messenger from './messenger';
import { requestMessages, receiveMessage } from '../../actions/message_actions';
import { createChannelSubscription } from '../../utils/channel_api_util';

const mapStateToProps = state => {
  return {
    messages: state.entities.messages,
    currentUserId: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestMessages: messages => dispatch(requestMessages()),
    receiveMessage: message => dispatch(receiveMessage(message)),
    createChannelSubscription
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
