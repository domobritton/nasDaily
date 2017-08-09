class Videos::Fetch
  MINIMUM_THUMBNAIL_WIDTH = 400

  def self.call
    new.call
  end

  def call
    raw_videos = facebook_api.get_all_videos

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
          tag = facebook_api.get_content_tag(t)
          next unless tag

          tag_model = find_or_create_tag_model!(tag)
          find_or_create_videos_content_tag_model!(tag_model, video_model)
        end
      end
    end

    Video.includes(:content_tags).order(created_at: :desc).all
  end

  private

  def facebook_api
    @facebook_api ||= ::Facebook::API.new
  end

  def create_video_if_horizontal!(raw_video)
    format = facebook_api.get_video_format(raw_video['id'])

    # skip videos without thumbnails
    return nil unless format.count > 1
    # skip vertical videos
    return nil unless format.first['width'] > format.first['height']

    full_picture = select_full_picture(format)

    # skip videos without a thumbnail of appropriate size
    return unless full_picture

    Video.create!(
      facebook_id: raw_video['id'],
      title: raw_video['title'],
      description: raw_video['description'],
      picture: raw_video['picture'],
      full_picture: full_picture,
      originally_posted_at: raw_video['created_time']
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

  def select_full_picture(format)
    full_picture = format
      .select { |f| f['width'] == 480 }
      .first
      .try(:[], 'picture')

    return full_picture if full_picture

    # ocassionally facebook api won't return a format object with 480 width
    format
      .select { |f| f['width'] && f['width'] >= MINIMUM_THUMBNAIL_WIDTH }
      .first
      .try(:[], 'picture')
  end
end
