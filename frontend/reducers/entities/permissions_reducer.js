import { merge } from 'lodash';

import { RECEIVE_PERMISSIONS } from '../../actions/permission_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';

const PermissionsReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PERMISSIONS:
      return action.permissions;
    case RECEIVE_CHANNEL:
      const channelId = action.channel.id;
      merge(copyState, {[channelId]: {channelId}});
      return copyState;
    default:
      return state;
  }
};

export default PermissionsReducer;
