import { merge } from 'lodash';

import { SELECT_USER, SELECT_USERS, UNSELECT_USER } from '../../actions/ui_actions';
import { CLEAR_MODAL } from '../../actions/modal_actions.js';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';

const SelectedUsersUiReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case SELECT_USER:
      merge(copyState, {[action.userId]: action.userId});
      return copyState;
    case SELECT_USERS:
      const newState = {};
      action.userIds.forEach( userId => newState[userId] = userId );
      return newState;
    case UNSELECT_USER:
      delete copyState[action.userId];
      return copyState;
    case RECEIVE_CHANNEL:
    case CLEAR_MODAL:
      return {};
    default:
      return state;
  }
};

export default SelectedUsersUiReducer;
