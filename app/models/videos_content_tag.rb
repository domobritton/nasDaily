class VideosContentTag < ApplicationRecord
  belongs_to :video
  belongs_to :content_tag

  validates :video,
            :content_tag,
            presence: true
end
