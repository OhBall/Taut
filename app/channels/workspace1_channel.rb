class Workspace1Channel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "workspace1"

    # documentation:
    # http://api.rubyonrails.org/classes/ActionCable/Channel/Streams.html
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    #called server side after the frontend App call speak.
    #datahould be a message
    Message.new()
  end
end
