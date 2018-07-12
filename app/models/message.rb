# == Schema Information
#
# Table name: messages
#
#  id                    :bigint(8)        not null, primary key
#  body                  :string           not null
#  user_id               :integer          not null
#  conversationable_type :string
#  conversationable_id   :bigint(8)
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Message < ApplicationRecord
end
