# README

Taut is a Slack clone built using a Rails backend and React/Redux frontend framework.
Taut utilizes Rails Action Cables to implement its WebSocketing.
When a user logs in, the frontend creates a subscription for every public channel and channel for which the user has permission to access.

```
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
```
