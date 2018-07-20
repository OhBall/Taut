json.extract! channel, :id, :name, :description, :private, :is_dm
json.user_ids do
  json.array! channel.user_ids
end
