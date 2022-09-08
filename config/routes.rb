Rails.application.routes.draw do
  namespace :api do 
    resources :lists do
      resources :todos
    end
    # para terceiro nivel sempre use o parametro passado para não deixar a url longa
    resources :todos, except: [:index,:show, :update,:create, :destroy] do
      resources :notes
    end
    
    #para um quarto nivel você faria:
    # resources :notes, except: [:index,:show,:update,:create,:destroy] do
    #   resources :comments
    # end

  end
end