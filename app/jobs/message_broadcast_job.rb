class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    Workspace1Channel.broadcast_to(
      message.conversationable, message: render_message(message)
    )
  end

  private
  def render_message(message)
    ApplicationController.renderer.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
  end
end
