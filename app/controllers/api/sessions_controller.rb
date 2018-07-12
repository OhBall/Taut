class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      log_in(@user);
      render :show
    else
      render json: ['Sorry, you entered an incorrect email address or password.'], status: 401
    end
  end

  def destroy
    log_out
    render json: {}
  end

end
