class ContentTag < ApplicationRecord
  has_many :videos_content_tags
  has_many :videos,
           through: :videos_content_tags

  validates_uniqueness_of :facebook_id
  validates :name, :facebook_id, presence: true
end
