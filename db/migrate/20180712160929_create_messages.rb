class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.references :conversationable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
