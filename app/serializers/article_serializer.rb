class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :cover_image, :content, :genre, :created_at
  
  # belongs_to :author
end
