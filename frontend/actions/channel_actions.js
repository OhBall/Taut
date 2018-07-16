import * as ChannelApiUtil from '../utils/channel_api_util.js';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const receiveChannels = channels => {
  return {
    type: RECEIVE_CHANNELS,
    channels,
  };
};

export const receiveChannel = channel => {
  return {
    type: RECEIVE_CHANNEL,
    channel,
  };
};

export const removeChannel = ({ id }) => {
  return {
    type: REMOVE_CHANNEL,
    id,
  };
};

export const requestChannels = () => dispatch => {
  ChannelApiUtil.fetchChannels().then(
    channels => dispatch(receiveChannels(channels))
  );
};

export const requestChannel = () => dispatch => {
  ChannelApiUtil.fetchChannel().then(
    channel => dispatch(receiveChannel(channel))
  );
};

export const createChannel = channel => dispatch => {
  ChannelApiUtil.createChannel().then(
    receivedChannel => dispatch(receiveChannel(receivedChannel))
  );
};

export const deleteChannel = id => dispatch => {
  ChannelApiUtil.deleteChannel(id).then(
    deletedChannel => dispatch(removeChannel(deletedChannel))
  );
};
