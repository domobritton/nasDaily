Rails.application.routes.draw do
  root to: 'home#index'

  get 'api/videos', to: 'home#videos'
end
