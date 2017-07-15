require 'koala'

class Videos::Fetch
  def self.call
    new.call
  end

  def call
    raw_videos = graph.get_object(
      'nasdaily/videos?fields=content_tags,description,title,picture&limit=2000'
    ).reverse

    # preload all videos and content_tags
    Video.includes(:content_tags).all.to_a

    raw_videos.each do |v|
      video_model = Video.find_by(facebook_id: v['id'])

      # add only new videos, cache already fetched ones
      next if video_model

      video_model = create_video_if_horizontal!(v)
      # skip vertical videos and videos without a thumbnail
      next unless video_model

      if v['content_tags']
        v['content_tags'].each do |t|
          # rescue because facebook's content_tag ids don't work sometimes
          tag = graph.get_object("#{t}?fields=name") rescue nil
          next unless tag

          tag_model = find_or_create_tag_model!(tag)
          find_or_create_videos_content_tag_model!(tag_model, video_model)
        end
      end
    end

    Video.includes(:content_tags).order(created_at: :desc).all
  end

  private

  def graph
    return @graph if @graph

    oauth = Koala::Facebook::OAuth.new(ENV.fetch('FB_APP_ID'), ENV.fetch('FB_APP_SECRET'))
    access_token = oauth.get_app_access_token

    @graph = Koala::Facebook::API.new(access_token)
  end

  def create_video_if_horizontal!(raw_video)
    format = graph.get_object("#{raw_video['id']}?fields=format")['format']

    # skip videos without thumbnails
    return nil unless format.count > 1
    # skip vertical videos
    return nil unless format.first['width'] > format.first['height']

    full_picture = format
      .select { |f| f['width'] == 480 }
      .first['picture']

    Video.create!(
      facebook_id: raw_video['id'],
      title: raw_video['title'],
      description: raw_video['description'],
      picture: raw_video['picture'],
      full_picture: full_picture,
    )
  end

  def find_or_create_tag_model!(raw_tag)
    model = ContentTag.find_by(facebook_id: raw_tag['id'])

    if !model
      model = ContentTag.create!(
        facebook_id: raw_tag['id'],
        name: raw_tag['name']
      )
    end

    model
  end


  def find_or_create_videos_content_tag_model!(tag, video)
    model = VideosContentTag.find_by(
      content_tag: tag,
      video: video
    )

    if (!model)
      model = VideosContentTag.create!(
        content_tag: tag,
        video: video
      )
    end

    model
  end
end
