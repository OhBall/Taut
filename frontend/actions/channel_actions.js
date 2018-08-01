import * as ChannelApiUtil from '../utils/channel_api_util.js';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

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

export const removeChannel = (payload) => {
  const { removedChannel, general } = payload;

  return {
    type: REMOVE_CHANNEL,
    removedChannel,
    general,
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors,
  };
};

export const requestChannels = () => dispatch => {
  return ChannelApiUtil.fetchChannels().then(
    channels => dispatch(receiveChannels(channels))
  );
};

export const requestChannel = () => dispatch => {
  return ChannelApiUtil.fetchChannel().then(
    channel => dispatch(receiveChannel(channel))
  );
};

export const createChannel = (channel, permitIds) =>
  dispatch => {
    return ChannelApiUtil.createChannel(channel, permitIds).then(
      receivedChannel => dispatch(receiveChannel(receivedChannel)),
      ({responseJSON}) => dispatch(receiveErrors(responseJSON))
    );
  };

export const editChannel = (channel, permitIds) =>
  dispatch => {
    return ChannelApiUtil.updateChannel(channel, permitIds).then(
      receivedChannel => dispatch(receiveChannel(receivedChannel)),
      ({respenseJSON}) => dispatch(receiveErrors(responseJSON))
    );
  };

export const deleteChannel = id => dispatch => {
  return ChannelApiUtil.deleteChannel(id).then(
    payload => dispatch(removeChannel(payload))
  );
};
