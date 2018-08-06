class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all.includes(:users)
  end

  def create
    permissions = [current_user.id]
    permissions.concat(permission_params.map(&:to_i)) if params[:permissions]

    if (channel_params[:is_dm] == 'true')
      @channel = Channel.find_by_permitted_users(permissions)
    end

    is_new = @channel ? false : true
    @channel ||= Channel.new(channel_params)

    unless @channel.save
      render json: @channel.errors.full_messages, status: 422
      return
    end

    if @channel.private? && is_new
      ChannelService.create_permissions(@channel, permissions)
      unless @channel.save
        @channel.destroy
        render json: @channel.errors.full_messages, status: 422
      end
    end
    render :show
  end

  def destroy
    @channel = Channel.find(params[:id])
    @general = Channel.find_by(name: 'general')
    unless @channel
      render json: ['Channel not found'], status: 422
      return; end
    unless @channel.name != 'general' && @channel.check_permissions(current_user.id)
      render json: ['You lack permission to delete this channel'], status: 403
      return; end
    unless @channel.destroy
      render json: @channel.errors.full_messages, status: 422
      return; end
    render :destroy
  end

  def update
    @channel = Channel.includes(:permissions).find(params[:id])

    unless @channel
      render json: ['Channel not found'], status: 422
      return; end
    unless !@channel.private? || @channel.permissions.find_by(user_id: current_user.id)
      render json: ["You do not have permission to edit this channel"], status: 403
      return; end
    unless @channel.update(channel_params)
      render json: @channel.errors.full_messages, status: 422
      return; end
    if @channel.private?
      user_ids = permission_params + [current_user.id]
      ChannelService.update_permissions(@channel, user_ids)
      unless @channel.save
        render json: @channel.errors.full_messages, status: 422
        return
      end
    else
      @channel.permissions.destroy_all
    end
    render :show
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :private, :is_dm)
  end

  def permission_params
    params[:permissions][:userIds].keys
  end

end
