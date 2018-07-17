class CreatePermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :permissions do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
    end
    add_index :permissions, :user_id
    add_index :permissions, :channel_id
    add_index :subscriptions, :subscribable_id
  end
end
