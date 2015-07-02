class PostsController < ApplicationController

  def index
    @posts = Post.all.limit(60)
    render json: @posts, status: 200
  end

end