# frozen_string_literal: true

require 'net/http'

# SearchController
class SearchController < ApplicationController
  def index
    uri = URI("https://api.github.com/search/repositories?q=#{params[:query]}&sort=stars&order=desc&per_page=100")
    json_res = Net::HTTP.get(uri)

    respond_to do |format|
      format.json { render body: json_res } # because already is JSON
    end
  end
end
