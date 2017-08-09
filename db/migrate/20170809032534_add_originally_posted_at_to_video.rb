class AddOriginallyPostedAtToVideo < ActiveRecord::Migration[5.1]
  def change
    add_column :videos, :originally_posted_at, :datetime
  end
end
