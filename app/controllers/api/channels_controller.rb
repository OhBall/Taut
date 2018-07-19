class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      if @channel.private
        current_user_id = current_user.id
        if params[:permissions]
          permission_params.each do |user_id|
            unless user_id == current_user_id
              @channel.permissions.build(user_id: user_id)
            end
          end
        end
        @channel.permissions.build(user_id: current_user_id)
      end
      @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end



  private
  def channel_params
    params.require(:channel).permit(:name, :description, :private)
  end

  def permission_params
    params[:permissions][:userIds].keys
  end

end
