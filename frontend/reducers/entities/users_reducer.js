import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      merge(copyState, {[action.user.id]: action.user});
      return copyState;
    default:
      return state;
  }
};

export default UsersReducer;
