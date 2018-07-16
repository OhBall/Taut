import SELECT_CHANNEL from '../actions/ui_actions.js';
import { merge } from 'lodash';

const UiReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case SELECT_CHANNEL:
      merge(copyState, {selectedId: action.channelId});
      return copyState;
    default:
      return state;
  }
};
