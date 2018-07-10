import React from 'react';
import { ReactDOM } from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();


  // TODO: Delete before deployment
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
