Rails.application.routes.draw do
  namespace :api do 
    resources :lists do
      resources :todos
    end
  end
end
