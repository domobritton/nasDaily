class HomeController < ApplicationController
  def index
    # this check exists if cached videos were busted and need to be repopulated
    if CachedVideoCollection.none?
      @videos = [].to_json

      return
    end

    @videos = CachedVideoCollection.first.videos_json
  end
end
