# == Schema Information
#
# Table name: subscriptions
#
#  id                :bigint(8)        not null, primary key
#  user_id           :integer          not null
#  subscribable_type :string
#  subscribable_id   :bigint(8)
#


class Subscription < ApplicationRecord
  validates :user_id, presence: true
  validates :subscribable_id, presence: true
  validates :subscribable_type, presence: true
end
