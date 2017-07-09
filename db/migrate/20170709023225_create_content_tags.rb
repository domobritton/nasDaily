class CreateContentTags < ActiveRecord::Migration[5.1]
  def change
    create_table :content_tags do |t|
      t.string :facebook_id, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :content_tags, :facebook_id
  end
end
