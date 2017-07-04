# Scrollytelling::Pageflow::Navigation

This Pageflow plugin replaces the built-in Pageflow navigation with the Scrollytelling version.

The Scrollytelling navigation uses dots to show progress instead of thumbnails. This plugin does not replace the mobile Pageflow navigation; only the desktop navigation.

### This is the master branch

This branch targets pageflow `master`. If you're working with pageflow 1.11.x, you want to switch to the [1-13-stable](https://github.com/scrollytelling/scrollytelling-pageflow-navigation/tree/1-13-stable) branch. From that branch come all 1.13.x releases of this gem.

## Examples

For examples see the various stories on [our homepage](https://www.scrollytelling.io/).

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'scrollytelling-pageflow-navigation'
```

Bundle the plugin with your application by typing this on the command line:

    $ bundle

## Usage

You will need to register the plugin in the Pageflow initializer and then add it to your asset pipeline.

```
# config/initializers/pageflow.rb
config.plugin(Scrollytelling::Pageflow::Navigation::Plugin.new)

# app/assets/javascripts/pageflow/application.js
//= require scrollytelling/pageflow/navigation

# app/assets/stylesheets/pageflow/application.css.scss
@import "scrollytelling/pageflow/navigation";
```

Furthermore after installing any Pageflow plugin it's a good idea to change your asset version. This will invalidate all server-side cache, most notably the cache that `i18n-js` uses to render the editor UI.

```
# config/initializers/assets.rb
Rails.application.config.assets.version = 'x.x.x'
```

After all that, restart your application server.

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/scrollytelling/scrollytelling-pageflow-navigation. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
