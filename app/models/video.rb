class Video < ApplicationRecord
  has_many :videos_content_tags
  has_many :content_tags,
            through: :videos_content_tags,
            dependent: :destroy

  validates_uniqueness_of :facebook_id
  validates :facebook_id,
            :picture,
            :full_picture,
            presence: true
end
