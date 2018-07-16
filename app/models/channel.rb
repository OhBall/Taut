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
#

class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :messages, as: :conversationable

  //# TODO: implement a 'ensure_subscribed' method that makes sure that a user
    # =>    is subscribed to a channel before they make a message that belongs
    # =>    to that channel. Note: This todo is also located in Message.rb

end
