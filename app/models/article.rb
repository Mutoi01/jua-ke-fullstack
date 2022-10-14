class Article < ApplicationRecord
  # validates :title, presence: true
  # validates :cover_image, presence: true
  # validates :content, presence: true
  # validates :genre, presence: true

  belongs_to :author

  def preview
    content.split("\n")[1]
  end

  def date
    created_at.strftime('%B %e, %Y')
  end
  
end
