class Api::ApplicationController < ActionController::API
  VIDEOS_CACHE_INTERVAL_MINUTES = 360

  def videos
    cached_video_collection = CachedVideoCollection.first

    if cached_video_collection &&
        cached_video_collection.created_at > VIDEOS_CACHE_INTERVAL_MINUTES.minutes.ago
      render json: cached_video_collection.videos_json

      return
    end

    videos = Videos::Fetch.call
    json_videos = videos_to_json(videos)

    CachedVideoCollection.transaction do
      CachedVideoCollection.destroy_all
      CachedVideoCollection.create!(videos_json: json_videos)
    end

    render json: json_videos
  end

  def users
    existing_user = User.find_by(email: user_params[:email])

    if existing_user
      existing_user.update!(user_params)
    else
      User.create!(user_params)
    end

    head :ok
  end

  private

  def user_params
    params.permit(:email, :early_interest_in_app, :early_interest_in_tshirt)
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
