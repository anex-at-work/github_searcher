Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'search', to: 'search#index', defaults: {format: 'json'}

  root 'main#index'
end
