# encoding: utf-8
module WiceGrid #:nodoc:
  module Generators #:nodoc:
    class InstallGenerator < Rails::Generators::Base #:nodoc:
      desc 'Copy WiceGrid wice_grid_config.rb to config/initializers, ' \
        'wice_grid.yml to config/locales/, and wice_grid.scss to assets/stylesheets'

      source_root File.expand_path('../templates', __FILE__)

      def copy_stuff #:nodoc:
        template 'wice_grid_config.rb', 'config/initializers/wice_grid_config.rb'

        copy_file 'wice_grid.yml',  'config/locales/wice_grid.yml'
      end
    end
  end
end
