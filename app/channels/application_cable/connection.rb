module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # identified_by :current_user
    #
    # def connect
    #   self.current_user = find_verified_user
    # end
    #
    # protected
    # def find_verified_user
    #   if verified_user = User.find_by(id: cookies.signed)
    #
    #   end
    # end
  end
end
