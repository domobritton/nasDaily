require 'koala'

class Facebook::API
  VIDEOS_FIELDS = %w{
    content_tags
    description
    title
    picture
    created_time
  }

  MAX_NUM_VIDEOS = 2000

  def initialize
    oauth = Koala::Facebook::OAuth.new(ENV.fetch('FB_APP_ID'), ENV.fetch('FB_APP_SECRET'))
    access_token = oauth.get_app_access_token

    @graph = Koala::Facebook::API.new(access_token)
  end

  def get_all_videos
    graph.get_object(
      "nasdaily/videos?fields=#{VIDEOS_FIELDS.join(',')}&limit=#{MAX_NUM_VIDEOS}"
    ).reverse
  end

  def get_video_format(video_id)
    graph.get_object("#{video_id}?fields=format")['format']
  end

  def get_content_tag(tag_id)
    # rescue because facebook's content_tag ids don't work sometimes
    graph.get_object("#{t}?fields=name") rescue nil
  end

  private

  attr_reader :graph
end
