@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :username, :img_url
  end
end

//# TODO: user _user partial instead
