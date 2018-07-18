@permissions.each do |permission|
  json.set! permission.channel_id do
    json.partial! 'api/permissions/permission', permission: permission
  end
end
