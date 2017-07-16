Rails.application.routes.draw do
  root to: 'home#index'

  get 'api/videos', to: 'home#videos'

  get 'videos', to: 'home#index'
  get 'app', to: 'home#index'
  get 'shop', to: 'home#index'
end
