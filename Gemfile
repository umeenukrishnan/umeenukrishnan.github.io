source "https://rubygems.org"

# Use GitHub Pages gem instead of Jekyll directly
gem "github-pages", group: :jekyll_plugins

# Plugins that are GitHub Pages compatible
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-remote-theme"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby compatibility
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?