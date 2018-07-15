import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      merge(copyState, action.users);
      return copyState;
    case RECEIVE_CURRENT_USER:
      merge(copyState, {[action.user.id]: action.user});
      return copyState;
    default:
      return state;
  }
};

export default UsersReducer;
