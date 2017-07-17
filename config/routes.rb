Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    get '/videos', to: 'application#videos'

    post '/users', to: 'application#users'
  end

  get 'videos', to: 'home#index'
  get 'app', to: 'home#index'
  get 'shop', to: 'home#index'
end
