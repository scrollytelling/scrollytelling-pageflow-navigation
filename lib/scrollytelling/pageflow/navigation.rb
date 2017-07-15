require "scrollytelling/pageflow/navigation/plugin"
require "scrollytelling/pageflow/navigation/widget_type"
require "scrollytelling/pageflow/navigation/engine"
require "scrollytelling/pageflow/navigation/version"

module Scrollytelling
  module Pageflow
    module Navigation
      def self.widget_type
        WidgetType.new
      end

      def self.plugin
        Plugin.new
      end
    end
  end
end
