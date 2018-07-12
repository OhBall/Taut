class MakeConversationableNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :conversationable_id, :integer, null: false
    change_column :messages, :conversationable_type, :string, null: false

    add_column :channels, :name, :string, null: false
    add_column :channels, :private, :boolean, null: false, default: false
  end
end
