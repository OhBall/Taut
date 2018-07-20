# README

Taut is a Slack clone built using a Rails backend and React/Redux frontend framework.

## Live Chat

Taut utilizes Rails Action Cables to implement its WebSocketing.
When a user logs in, the frontend creates a subscription for every public channel and channel for which the user has permission to access.
```
#frontend/utils/channel_api_util.js
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

On the backend, streams are dynamically created, with a check to guarantee
the user should have access:
```
#app/channels/workspace1_channel.rb
def subscribed
  channel_room = Channel.find(@params['id'])
  stream_for channel_room if (!channel_room.private || channel_room.users.include?(current_user))
end
```

## Schema
Originally, the plan was to use several polymorphic associations to implement
both, but during development I realized that, functionally, private channels
and direct message conversations are almost identical. Because of this, I
opted to simply add an is_dm property to the channel table.

## Auto Scroll
Because of the changing size of the message list, scrolling a fixed amount to
the bottom of the page proved impractical. Instead, an undisplayed div is rendered
at the bottom of the page, which is used as an anchor point for autoscrolling.

## Known-Issues:
* Pressing enter in modal forms will close the modal without submitting the form.

## To Do
* Display more information in the messenger header
* Ability to edit messages
* Ability to delete channels and dms
* Ability to edit your profile information, including profile picture
* Message reactions
* More backend verifications before executing actions
* More semantic schema naming
