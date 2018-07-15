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
