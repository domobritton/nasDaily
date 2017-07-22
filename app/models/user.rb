class User < ApplicationRecord
  validates :email, presence: true
  validates_format_of :email, with: /.+@.+\..+/
end
