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
      if @channel.private? && is_new
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

    unless @channel
      render json: ['Channel not found'], status: 422
      return
    end

    if @channel.name != 'general' && @channel.check_permissions(current_user.id)
      if @channel.destroy
        render :destroy
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: ['You lack permission to delete this channel'], status: 403
    end
  end

  def update
    @channel = Channel.includes(:permissions).find(params[:id])
    if @channel && !@channel.private? || @channel.permissions.find_by(user_id: current_user.id)
      if @channel.update(channel_params)
        if @channel.private?
          user_ids = permission_params + [current_user.id]
          @channel.permissions.each do |permission|
            permission.destroy unless user_ids.include?(permission.user_id)
          end
          user_ids.each do |user_id|
            unless @channel.permissions.any? { |permission| permission.user_id == user_id }
              @channel.permissions.build(user_id: user_id)
            end
          end
          unless @channel.save
            render json: @channel.errors.full_messages, status: 422
            return
          end
        else
          @channel.permissions.destroy_all
        end
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: ["You do not have permission to edit this channel"], status: 403
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
