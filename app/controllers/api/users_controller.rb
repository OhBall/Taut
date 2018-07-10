class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = params[:id]
  end

  def create
    @user = User.new(
      email: user_params[:email],
      password: user_params[:password])

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end

  end

  def destroy
    @user = User.find([params[:id]])
    if @user.delete
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  # TODO: forbid deletion/updates of non current_user

  private
  def user_params
    params.require(:user).permit(:email, :username, :password, :password_digest, :session_token)
  end

end
