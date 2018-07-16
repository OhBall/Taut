class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all.includes(:messages)
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages
    end
  end



  private
  def channel_params
    params.require(:channel).permit(:name, :description, :private)
  end

end
