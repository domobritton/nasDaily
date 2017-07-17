class HomeController < ApplicationController
  def index
    @videos = CachedVideoCollection.first_or_create.videos_json
  end
end
