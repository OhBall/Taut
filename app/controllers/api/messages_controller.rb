class Api::MessagesController < ApplicationController
  def index
    @messages = Messages.all
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save
      render :show
    end
  end

  def show

  end

  def message_params
    params.require(:message).permit(:body, :conversationable_id, :conversationable_type)
  end

end
