Rails.application.routes.draw do
  root 'movie#index'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'share', to: 'movie#new'
  post 'share', to: 'movie#create'
end
