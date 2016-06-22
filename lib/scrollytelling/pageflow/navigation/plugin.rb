require 'pageflow/plugin'

module Scrollytelling
  module Pageflow
    module Navigation
      class Plugin < ::Pageflow::Plugin
        def configure(config)
          config.widget_types.register(Scrollytelling::Pageflow::Navigation.widget_type, default: true)
        end
      end
    end
  end
end
