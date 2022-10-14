class AuthorsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    authors = Author.all
    render json: authors, status: :ok
  end
  
  def show 
    authors = Author.find_by(id: params[:id])
    render json: authors, status: :ok  
  end

  def create
    author = Author.create!(author_params)
    render json: author, status: :created
  end

  def update
    author = Author.find_bird(id: params[:id])
    author.update!(author_params)
    render json: author
  end

  def destroy
    author = Author.find_by(id: params[:id])
    author.destroy
    head :no_content
  end

  private

  def author_params
    params.permit(:name)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end


end
