class CreateCachedVideoCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :cached_video_collections do |t|
      t.json :videos_json, default: "[]"
      t.integer :singleton_guard, default: 0

      t.timestamps
    end
    add_index :cached_video_collections, [:singleton_guard], :unique => true
  end
end
