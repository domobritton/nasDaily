source 'https://rubygems.org'
ruby '2.4.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'koala', '~> 3.0.0'
gem 'rails', '~> 5.1.2'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 2.0'
gem 'nokogiri', '~> 1.8.0'
gem "autoprefixer-rails", '~> 7.1.2'
gem 'pg', '~> 0.18'
gem 'newrelic_rpm', '~> 4.2.0'
gem 'paper_trail', '~> 7.1.0'

gem 'hamburgers', '~> 0.9.1'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

group :production do
  gem 'rails_12factor'
end

group :development do
  gem 'pry'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
