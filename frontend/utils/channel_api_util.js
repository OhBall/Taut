export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/channels',
  });
};

export const fetchChannel = id => {
  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`,
  });
};

export const createChannel = (channel, userIds) => {
  return $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: {
      channel,
      permissions: {userIds},
    }
  });
};

export const deleteChannel = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/channels/${id}`,
  });
};


export const createChannelSubscriptions = (channels, receiveMessage) => {
  Object.keys(channels).forEach( channelId => {
    createChannelSubscription(channelId, receiveMessage);
  });
};

export const createChannelSubscription = (channelId, receiveMessage) => {
  App[channelId] = App.cable.subscriptions.create(
    {channel: "Workspace1Channel", id: channelId},
    {
      received: function(data){
        const message = JSON.parse(data.message);
        receiveMessage(message);
      },
      speak: function(message) {
        return this.perform('speak', { message });
      }
  }
);};
