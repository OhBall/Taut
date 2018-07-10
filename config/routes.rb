Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end

end
