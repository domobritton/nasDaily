require 'koala'

class HomeController < ApplicationController
  helper_method :cached_videos

  def index
  end

  def cached_videos
    render json: Rails.cache.read('all_videos')
  end

  def videos
    oauth = Koala::Facebook::OAuth.new(ENV.fetch('FB_APP_ID'), ENV.fetch('FB_APP_SECRET'))
    access_token = oauth.get_app_access_token
    graph = Koala::Facebook::API.new(access_token)

    videos = graph.get_object(
      'nasdaily/videos?fields=content_tags,title,embed_html,picture&limit=2000'
    )

    Rails.cache.write('all_videos', videos)

    render json: videos
  end
end
