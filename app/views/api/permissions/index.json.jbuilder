@permission.each do |permission|
  json.set! permission.channel_id do
    json.partial! 'api/permissions/permition', permission: permission
  end
end
