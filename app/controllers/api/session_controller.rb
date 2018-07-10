class Api::SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      log_in(@user);
      render :show
    else
      render json: ['invalid username/password'], status: 401
    end
  end

  def destroy
    log_out
    render json: {}
  end

end
