require "scrollytelling/pageflow/navigation/version"
require "scrollytelling/pageflow/navigation/plugin"
require "scrollytelling/pageflow/navigation/widget_type"
require "scrollytelling/pageflow/navigation/engine"

module Scrollytelling
  module Pageflow
    module Navigation
      def self.widget_type
        WidgetType.new
      end
    end
  end
end
