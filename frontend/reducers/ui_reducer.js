import { combineReducers } from 'redux';
import sidebar from './ui/sidebar_ui_reducer.js';
import modal from './ui/modal_ui_reducer.js';

export default combineReducers({ sidebar, modal });
