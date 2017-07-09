require 'koala'

class HomeController < ApplicationController
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
      'nasdaily/videos?fields=content_tags,description,title,picture&limit=2000'
    )

    Video.includes(:content_tags).all.to_a

    videos.map! do |v|
      video_model = Video.find_by(facebook_id: v['id'])

      next if video_model

      video_model = Video.create!(
        facebook_id: v['id'],
        title: v['title'],
        description: v['description'],
        picture: v['picture'],
        full_picture: v['picture'],
      )

      if v['content_tags']
        v['content_tags'].each do |t|
          tag = graph.get_object("#{t}?fields=name") rescue nil

          next unless tag

          tag_model = ContentTag.find_by(facebook_id: tag['id'])

          if !tag_model
            tag_model = ContentTag.create!(
              facebook_id: tag['id'],
              name: tag['name']
            )
          end

          videos_content_tag_model = VideosContentTag.find_by(
            content_tag: tag_model,
            video: video_model
          )

          if (!videos_content_tag_model)
            videos_content_tag_model = VideosContentTag.create!(
              content_tag: tag_model,
              video: video_model
            )
          end
        end
      end
    end

    @videos = Video.includes(:content_tags).all
    json_videos = videos_to_json(@videos)
    Rails.cache.write('all_videos', json_videos)

    render json: json_videos
  end

  def videos_to_json(videos)
    Jbuilder.encode do |json|
      json.array! videos do |v|
        json.facebook_id v.facebook_id
        json.title v.title
        json.full_picture v.full_picture
        json.content_tags v.content_tags do |t|
          json.name t.name
        end
      end
    end
  end
end
