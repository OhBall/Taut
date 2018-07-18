import { merge } from 'lodash';

import { RECEIVE_PERMISSIONS } from '../../actions/permission_actions';

const PermissionsReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PERMISSIONS:
      return action.permissions;
    default:
      return state;
  }
};

export default PermissionsReducer;
