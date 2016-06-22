require 'pageflow/widget_type'

module Scrollytelling
  module Pageflow
    module Navigation
      class WidgetType < ::Pageflow::WidgetType
        def name
          'scrollytelling-pageflow-navigation'
        end

        def roles
          ['navigation']
        end

        def render(template, entry)
          template.render('scrollytelling/pageflow/navigation/widget.html.erb', entry: entry)
        end
      end
    end
  end
end
