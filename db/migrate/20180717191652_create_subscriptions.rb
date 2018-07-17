class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false
      t.references :subscribable, polymorphic: true, index: true
    end
    add_index :subscriptions, :user_id
  end
end
