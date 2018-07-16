import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import actionCable from 'actioncable';

import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {

  let preloadedState = {};
  const { currentUser } = window;
  if (currentUser){
    preloadedState = {
      entities: {users: {[currentUser.id]: currentUser}},
      session: {id: currentUser.id}
    };
    window.currentUser = null;
  }
  const store = configureStore(preloadedState);
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);



  // TODO: Delete before deployment
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

// TODO: Delete before deployment

import * as ChannelApiUtil from './utils/channel_api_util';
window.cau = ChannelApiUtil;

import * as ModalActions from './actions/modal_actions';
window.ModalActions = ModalActions;
