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

export const createChannel = channel => {
  return $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: {channel},
  });
};

export const deleteChannel = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/channels/${id}`,
  });
};

//
// export const createChannelSubscriptions = (convos, receiveMessage) => {
//   Object.keys(convos).forEach( convoType => {
//     for
//
//   });
// };
export const createChannelSubscription = (channel, receiveMessage) => {
  // App['firstchannel'] = App.cable.subscriptions.create({channel: "Workspace1Channel", room: 'workspace1'},{
  App['firstchannel'] = App.cable.subscriptions.create({channel: "Workspace1Channel"},{
    received: function(data){
      const message = JSON.parse(data.message);
      receiveMessage(message);
    },
    speak: function(message) {
      return this.perform('speak', { message });
    }
  }
);};
