class RemoveForeignKeyFromContentTags < ActiveRecord::Migration[5.1]
  def change
    remove_reference :content_tags, :video, foreign_key: true
  end
end
