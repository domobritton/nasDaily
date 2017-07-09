json.array! @videos do |v|
  json.facebook_id v.facebook_id
  json.title v.title
  json.full_picture v.full_picture
  json.content_tags v.content_tags do |t|
    json.name t.name
  end
end
