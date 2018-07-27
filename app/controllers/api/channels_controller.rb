class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all.includes(:users)
  end

  def create
    current_user_id = current_user.id

    permissions = [current_user_id]
    permissions.concat(permission_params.map(&:to_i)) if params[:permissions]

    if (channel_params[:is_dm] == 'true')
      @channel = Channel.find_by_permitted_users(
        permissions.map { |id| id.to_i  }
      )
    end

    is_new = @channel ? false : true
    @channel ||= Channel.new(channel_params)

    if @channel.save
      if @channel.private && is_new
        permissions.each do |user_id|
          @channel.permissions.build(user_id: user_id)
        end
      end
      if @channel.save
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @general = Channel.find_by(name: 'general')
    if @channel && @channel.name != 'general'
      if @channel.check_permissions(current_user.id)
        @channel.destroy
        render :destroy
      else
        render json: ['Channel not found'], status: 422
      end
    else
      render json: ['You lack permission to delete this channel'], status: 422
    end
  end


  private
  def channel_params
    params.require(:channel).permit(:name, :description, :private, :is_dm)
  end

  def permission_params
    params[:permissions][:userIds].keys
  end

end
