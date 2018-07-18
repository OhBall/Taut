import { combineReducers } from 'redux';
import sidebar from './ui/sidebar_ui_reducer.js';
import modal from './ui/modal_ui_reducer.js';
import selectedUsers from './ui/selected_users_ui_reducer';

export default combineReducers({ sidebar, modal, selectedUsers });
