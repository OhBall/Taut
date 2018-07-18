import { merge } from 'lodash';

import { SELECT_USER, UNSELECT_USER } from '../../actions/ui_actions';
import { CLEAR_MODAL } from '../../actions/modal_actions.js';

const SelectedUsersUiReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case SELECT_USER:
      merge(copyState, {[action.userId]: action.userId});
      return copyState;
    case UNSELECT_USER:
      delete copyState[action.userId];
      return copyState;
    case CLEAR_MODAL:
      return {};
    default:
      return state;
  }
};

export default SelectedUsersUiReducer;
