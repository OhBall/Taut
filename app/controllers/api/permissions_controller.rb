class Api::PermissionsController < ApplicationController

  def index
    @permissions = Permission.where(user_id: current_user.id)
  end

end
