require 'rails/engine'

module Scrollytelling
  module Pageflow
    module Navigation
      class Engine < ::Rails::Engine
        isolate_namespace Scrollytelling::Pageflow::Navigation
      end
    end
  end
end
