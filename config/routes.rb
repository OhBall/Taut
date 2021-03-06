Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: { format: 'json' } do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:index, :create, :destroy]
    resources :channels, only: [:index, :create, :destroy, :update]
  end

  mount ActionCable.server, at: '/cable'

end
