class RemoveNullConstraintFromVideoTitle < ActiveRecord::Migration[5.1]
  def change
    change_column :videos, :title, :string, :null => true
  end
end
