class Workspace1Channel < ApplicationCable::Channel
  def subscribed
    channel_room = Channel.find(@params['id'])
    # stream_for channel_room
    stream_for channel_room if (!channel_room.private || channel_room.users.include?(current_user))
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    Message.create(data['message'])
  end
end
