class HomeController < ApplicationController
  def index
    @videos = CachedVideoCollection.first_or_create.videos_json
  end

  def videos
    videos = Videos::Fetch.call
    json_videos = videos_to_json(videos)

    CachedVideoCollection.transaction do
      CachedVideoCollection.destroy_all
      CachedVideoCollection.create(videos_json: json_videos)
    end

    render json: json_videos
  end

  def videos_to_json(videos)
    Jbuilder.encode do |json|
      json.array! videos do |v|
        json.facebook_id v.facebook_id
        json.title v.title
        json.full_picture v.full_picture
        json.content_tags v.content_tags.map(&:name)
      end
    end
  end
end
