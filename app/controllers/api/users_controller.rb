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
      password: user_params[:password]
    )

    if @user.save
      log_in(@user)
      render :show
    else
      errors = @user.errors.full_messages
      errors.delete_if {|error| error == "Username can't be blank"}
      render json: errors, status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.id != current_user.id
      render json: ["You cannot edit other users"], status: 403
    elsif @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find([params[:id]])
    if @user.id != current_user.id
      render json: ["You cannot delete other users"], status: 403
    elsif @user.delete
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password, :password_digest, :session_token)
  end

end
