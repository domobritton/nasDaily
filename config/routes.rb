Rails.application.routes.draw do
  root to: 'home#index'

  get 'api/videos', to: 'home#videos'
  get 'api/cached_videos', to: 'home#cached_videos'
end
