class User < ApplicationRecord
  validates :email, presence: true
  validates_format_of :email, with: /.+@.+\..+/

  has_paper_trail
end
