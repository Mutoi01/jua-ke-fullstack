class ArticlesController < ApplicationController
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    articles = Article.all
    render json: articles, status: :ok
  end
  
  def show 
    articles = Article.find_by(id: params[:id])
    render json: articles, status: :ok  

  end

  def create
    article = Article.create!(author_params)
    render json: article, status: :created
  end


  def update
    article = Article.find_by(id: params[:id])
    article.update!(article_params)
    render json: article
  end

  def destroy
    article = Article.find_by(id: params[:id])
    article.destroy
    head :no_content
  end

  private

  def article_params
    params.permit(:title, :cover_image, :content, :genre)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end


end
