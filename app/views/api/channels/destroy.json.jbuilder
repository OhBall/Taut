json.set! 'removedChannel' do
  json.partial! 'api/channels/channel', channel: @channel
end

json.set! 'general' do
  json.partial! 'api/channels/channel', channel: @general
end
