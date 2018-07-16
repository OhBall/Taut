import React from 'react';
import { connect } from 'react-redux';

import MessageList from './message_list';
import { requestMessages, receiveMessage } from '../../actions/message_actions';
import { createChannelSubscription } from '../../utils/channel_api_util';
import { requestAllUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    messages: state.entities.messages,
    users: state.entities.users,
    currentUserId: state.session.currentUser,
    selectedId: state.ui.selectedId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestMessages: messages => dispatch(requestMessages()),
    receiveMessage: message => dispatch(receiveMessage(message)),
    requestAllUsers: () => dispatch(requestAllUsers()),
    createChannelSubscription,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
