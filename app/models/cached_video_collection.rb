class CachedVideoCollection < ApplicationRecord
  # The "singleton_guard" column is a unique column which must always be set to '0'
  # This ensures that only one CachedVideoCollection row is created
  validates_inclusion_of :singleton_guard, :in => [0]
  validates_uniqueness_of :singleton_guard

  validates :videos_json, presence: true
end
