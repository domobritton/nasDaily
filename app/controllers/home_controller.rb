class HomeController < ApplicationController
  def index
    @videos = Rails.cache.read('all_videos') || []
  end

  def videos
    videos = Videos::Fetch.call
    json_videos = videos_to_json(videos)
    Rails.cache.write('all_videos', json_videos)

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
