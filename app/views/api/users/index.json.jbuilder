@users.each do |user|
  json.set! user.id do
    user.extract! email, username, img_url
  end
end
