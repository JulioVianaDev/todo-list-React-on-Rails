class Api::ListsController < ApplicationController

  #Model name => List
  before_action :set_list, only: [:update, :show, :destroy]
  def index
    render json: List.all
  end

  def show
    render json: @list
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render json: @list
    else
      render json: {errors: @list.errors},state:  :unprocessable_entity
    end
  end

  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: {errors: @list.errors},state: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
    render json: {message: 'List deleted with success'}
  end

  private
    def list_params
      params.require(:list).permit(:title, :desc)
    end
    def set_list
      @list = List.find(params[:id])
    end
end
