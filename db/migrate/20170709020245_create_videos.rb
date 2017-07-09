class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :facebook_id, null: false
      t.string :title, null: false
      t.string :description
      t.string :picture, null: false
      t.string :full_picture, null: false

      t.timestamps
    end

    add_index :videos, :facebook_id
  end
end
