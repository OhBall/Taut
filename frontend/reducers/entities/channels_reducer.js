import { merge } from 'lodash';

import { RECEIVE_CHANNEL,
         RECEIVE_CHANNELS,
         REMOVE_CHANNEL } from '../../actions/channel_actions';


const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  const copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      const { channel } = action;
      merge(copyState, {[channel.id]: channel});
      return copyState;
    case RECEIVE_CHANNELS:
      return action.channels;
    case REMOVE_CHANNEL:
      delete copyState[action.id];
      return copyState;
    default:
      return state;
  }
};

export default ChannelsReducer;
