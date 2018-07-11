import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  const {currentUser} = window;
  if ( currentUser ){
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

import * as SessionsActions from './actions/session_actions';
window.SessionsActions = SessionsActions;
