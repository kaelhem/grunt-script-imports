/*
 * grunt-script-imports
 * https://github.com/kaelhem/grunt-script-imports
 *
 * Copyright (c) 2015 Kaelhem
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('script_imports', 'A grunt task to create "scripts" statements from a collection of js files.', function() {
    var scriptImports = '';
    var rc = '';
    var options = this.options({
      destinationTemplate: '@@script_imports',
      indent: '',
      skipFirstIndent: false
    });
    var indent = options.skipFirstIndent ? '' : options.indent;

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      f.src.forEach(function (filepath) {
        var extension;
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
        } else {
          extension = filepath.split('.').pop();
          grunt.log.debug(filepath.green + ' "script" created'.magenta);
          scriptImports += rc + indent + '<script type="text/javascript" src="' + filepath + '"></script>';
          indent = options.indent;
          rc = '\n';
        }
      });
    });

    // Write the destination file.
    var destFile = this.files[0].dest;
    if (!grunt.file.exists(destFile)) {
        grunt.log.error("Destination file " + destFile + " not found");
    } else if (!grunt.file.isFile(destFile)) {
      grunt.log.error("Destination should be a file!");
    } else {
      var searchValue = options.destinationTemplate;
      var destFileContent = grunt.file.read(destFile);
      destFileContent = destFileContent.replace(searchValue, scriptImports);
      grunt.file.write(destFile, destFileContent);
      grunt.log.writeln('File "' + destFile.cyan + '" updated.');
    }
  });
};