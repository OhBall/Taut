# == Schema Information
#
# Table name: permissions
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#

class Permission < ApplicationRecord
  validates :user_id, presence: true
  validates :channel_id, presence: true

  belongs_to :user
  belongs_to :channel
end
