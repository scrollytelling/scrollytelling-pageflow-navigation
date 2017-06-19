# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'scrollytelling/pageflow/navigation/version'

Gem::Specification.new do |spec|
  spec.name          = "scrollytelling-pageflow-navigation"
  spec.version       = Scrollytelling::Pageflow::Navigation::VERSION
  spec.authors       = ["Joost Baaij"]
  spec.email         = ["joost@spacebabies.nl"]

  spec.summary       = "Replace Pageflow navigation with Scrollytelling navigation"
  spec.homepage      = "https://github.com/scrollytelling/scrollytelling-pageflow-navigation"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency 'pageflow', '~> 12.0.0.rc1'
  spec.add_runtime_dependency 'rails', '~> 4.2.6'

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
  spec.add_development_dependency "rspec"
end
