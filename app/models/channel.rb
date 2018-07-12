# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string           not null
#  private    :boolean          default(FALSE), not null
#

class Channel < ApplicationRecord
  validates :name, presence: true

  has_many :messages, as: :conversationable

end
