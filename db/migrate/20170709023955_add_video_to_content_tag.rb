class AddVideoToContentTag < ActiveRecord::Migration[5.1]
  def change
    add_reference :content_tags, :video, foreign_key: true
  end
end
