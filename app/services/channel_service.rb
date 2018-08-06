class ChannelService

  def self.update_permissions(channel, user_ids)
    channel.permissions.each do |permission|
      permission.destroy unless user_ids.include?(permission.user_id)
    end
    user_ids.each do |user_id|
      unless channel.permissions.any? { |permission| permission.user_id == user_id }
        channel.permissions.build(user_id: user_id)
      end
    end
  end

  def self.create_permissions(channel, permissions)
    permissions.each do |user_id|
      channel.permissions.build(user_id: user_id)
    end
  end

end
