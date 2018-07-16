import { SELECT_CHANNEL } from '../actions/ui_actions.js';
import { RECEIVE_CHANNELS } from '../actions/channel_actions.js';
import { merge } from 'lodash';

const UiReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      const firstId = Object.values(action.channels)[0].id;
      merge(copyState, {selectedId: firstId});
      return copyState;
    case SELECT_CHANNEL:
      merge(copyState, {selectedId: action.channelId});
      return copyState;
    default:
      return state;
  }
};

export default UiReducer;
