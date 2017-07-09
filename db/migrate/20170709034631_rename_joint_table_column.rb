class RenameJointTableColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :videos_content_tags, :videos_id, :video_id
  end
end
