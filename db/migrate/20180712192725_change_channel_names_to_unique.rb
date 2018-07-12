class ChangeChannelNamesToUnique < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :name, :string, unique: true
  end
  add_index :channels, :name
end
