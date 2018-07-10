class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :username, :password_digest, :session_token)
  end


end
