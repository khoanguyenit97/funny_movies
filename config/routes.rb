Rails.application.routes.draw do
  root 'movie#index'
  get 'login', to: 'sessions#new'
end
