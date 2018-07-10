import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);

  // TODO: Delete before deployment
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

// TODO: Delete before deployment
import * as SessionApiUtil from './utils/session_api_util';
window.SessionApiUtil = SessionApiUtil;
