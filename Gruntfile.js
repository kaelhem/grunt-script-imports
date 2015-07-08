/*
 * grunt-script-imports
 * https://github.com/kaelhem/grunt-script-imports
 *
 * Copyright (c) 2015 Kaelhem
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    copy: {
      all: {
        files: [
          {src: 'test/fixtures/index.html', dest: 'tmp/default_options'},
          {src: 'test/fixtures/index2.html', dest: 'tmp/custom_options'},
          {src: 'test/fixtures/index3.html', dest: 'tmp/with_indent'}
        ]
      }
    },

    // Configuration to be run (and then tested).
    script_imports: {
      default_options: {
        src: [ 'test/fixtures/*.js' ],
        dest: 'tmp/default_options'
      },
      custom_options: {
        options: {
          destinationTemplate: '{MY_SCRIPTS}'
        },
        src: [ 'test/fixtures/*.js' ],
        dest: 'tmp/custom_options'
      },
      with_indent: {
        options: {
          indent: '    '
        },
        src: [ 'test/fixtures/*.js' ],
        dest: 'tmp/with_indent'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'script_imports', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
