source "https://rubygems.org"

# GitHub Pages gem - this includes Jekyll and all compatible plugins
gem "github-pages", group: :jekyll_plugins

# Windows and JRuby compatibility (keep these)
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?