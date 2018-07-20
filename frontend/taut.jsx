import React from 'react';
import ReactDOM from 'react-dom';
import actionCable from 'actioncable';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  const { currentUser } = window;
  if (currentUser){
    preloadedState = {
      entities: {users: {[currentUser.id]: currentUser}},
      session: {id: currentUser.id},
    };
    window.currentUser = null;
  }
  const store = configureStore(preloadedState);
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
