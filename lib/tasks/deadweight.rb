# lib/tasks/deadweight.rake

require 'deadweight'

Deadweight::RakeTask.new do |dw|
  dw.stylesheets = %w( /stylesheets/style.css )
#  dw.pages = %w( / /page/1 /about )
  dw.pages = %w( )
end