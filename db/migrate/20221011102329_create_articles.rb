class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :cover_image
      t.string :content
      t.string :genre
      t.integer :author_id
      t.timestamps
    end
  end
end
