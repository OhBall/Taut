class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast 'workspace1', message: render_message(message)
    # Workspace1Channel.broadcast_to(
    #   'firstchannel', message: render_message(message)
    # )
  end

  private
  def render_message(message)
    ApplicationController.renderer.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
  end
end
