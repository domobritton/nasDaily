class CreateVideosContentTags < ActiveRecord::Migration[5.1]
  def change
    create_table :videos_content_tags do |t|
      t.references :videos, foreign_key: true
      t.references :content_tag, foreign_key: true

      t.timestamps
    end
  end
end
