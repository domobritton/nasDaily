class User < ApplicationRecord
  validates :email, presence: true
  validates_format_of :email, with: /.+@.+\..+/
  validates :early_interest_in_app,
            :early_interest_in_tshirt,
            presence: true
end
