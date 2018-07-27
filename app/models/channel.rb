# == Schema Information
#
# Table name: channels
#
#  id          :bigint(8)        not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  name        :string           not null
#  private     :boolean          default(FALSE), not null
#  description :string
#  is_dm       :boolean          default(FALSE), not null
#

class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true, unless: :is_dm

  has_many :messages, as: :conversationable
  has_many :permissions
  has_many :users, through: :permissions

  after_destroy :destroy_messages

  def self.find_by_permitted_users (user_ids)
    Channel.where(is_dm: true).find do |channel|
      return channel if channel.user_ids.sort() == user_ids.sort()
    end
  end

  def check_permissions(user_id)
    !self.private || self.permissions.find_by(user_id: user_id)
  end

  private
  def destroy_messages
    self.messages.destroy_all
  end
end
