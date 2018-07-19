class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    if @message
      @message.delete
      render :show
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :conversationable_id, :conversationable_type)
  end

  def broadcast_message(workspace, message)
    ActionCable.server.broadcast(
      workspace,
      body: message.body,
      user_id: message.user_id,
      conversationable_id: message.conversationable_id,
      conversationable_type: message.conversationable_type
    )
  end

end
