class Author < ApplicationRecord
  # validates :name, presence: true
  # validates :article, presence: true
  
  has_many :articles
end
