# == Schema Information
#
# Table name: messages
#
#  id                    :bigint(8)        not null, primary key
#  body                  :string           not null
#  user_id               :integer          not null
#  conversationable_type :string           not null
#  conversationable_id   :integer          not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Message < ApplicationRecord

  validates :body, presence: true
  validates :conversationable_id, presence: true
  validates :conversationable_type, presence: true

  belongs_to :user
  belongs_to :conversationable, polymorphic: true

  after_create_commit { MessageBroadcastJob.perform_later( self )}

  //# TODO: implement a 'ensure_subscribed' method that makes sure that a user
    # =>    is subscribed to a channel before they make a message that belongs
    # =>    to that channel. Note: This todo is also located in Channel.rb
end
