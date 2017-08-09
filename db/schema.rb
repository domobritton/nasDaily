# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170809032534) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cached_video_collections", force: :cascade do |t|
    t.json "videos_json", default: "[]"
    t.integer "singleton_guard", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["singleton_guard"], name: "index_cached_video_collections_on_singleton_guard", unique: true
  end

  create_table "content_tags", force: :cascade do |t|
    t.string "facebook_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["facebook_id"], name: "index_content_tags_on_facebook_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.boolean "early_interest_in_app", default: false
    t.boolean "early_interest_in_tshirt", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "videos", force: :cascade do |t|
    t.string "facebook_id", null: false
    t.string "title"
    t.string "description"
    t.string "picture", null: false
    t.string "full_picture", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "originally_posted_at"
    t.index ["facebook_id"], name: "index_videos_on_facebook_id"
  end

  create_table "videos_content_tags", force: :cascade do |t|
    t.bigint "video_id"
    t.bigint "content_tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_tag_id"], name: "index_videos_content_tags_on_content_tag_id"
    t.index ["video_id"], name: "index_videos_content_tags_on_video_id"
  end

  add_foreign_key "videos_content_tags", "content_tags"
  add_foreign_key "videos_content_tags", "videos"
end
