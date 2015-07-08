'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.script_imports = {
  default_options: function(test) {
    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/output');
    test.equal(actual, expected, 'should correctly replace @@script_imports marker');
    test.done();
  },
  custom_options: function(test) {
    var actual = grunt.file.read('tmp/custom_options');
    var expected = grunt.file.read('test/expected/output');
    test.equal(actual, expected, 'should correctly replace custom marker');
    test.done();
  },
  with_indent: function(test) {
    var actual = grunt.file.read('tmp/with_indent');
    var expected = grunt.file.read('test/expected/output_indent');
    test.equal(actual, expected, 'should correctly replace custom marker with respect of indentation');
    test.done();
  }
};
