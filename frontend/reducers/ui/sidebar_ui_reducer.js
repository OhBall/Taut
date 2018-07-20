import { SELECT_CHANNEL } from '../../actions/ui_actions.js';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../../actions/channel_actions.js';
import { merge } from 'lodash';

const SelectionUiReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      const firstId = Object.values(action.channels)[0].id;
      return {selectedId: firstId};
    case RECEIVE_CHANNEL:
      return {selectedId: action.channel.id};
    case SELECT_CHANNEL:
      merge(copyState, {selectedId: action.channelId});
      return copyState;
    default:
      return state;
  }
};

export default SelectionUiReducer;
