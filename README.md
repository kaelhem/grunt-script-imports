# grunt-script-imports

> A grunt task to create "scripts" statements from a collection of js files.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-script-imports --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-script-imports');
```

## The "script_imports" task

### Overview
In your project's Gruntfile, add a section named `script_imports` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  script_imports: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.destinationTemplate
Type: `String`
Default value: `'@@script_imports'`

Defines the marker that will be replaced with all `<script/>` statements.

#### options.indent
Type: `String`
Default value: `''`

Defines the indentation prefix to apply before each `<script/>` statements.

#### options.skipFirstIndent
Type: `Boolean`
Default value: `false`

Does the first `<script/>` statement should be indentated or not.


### Usage Examples

The destination file should be the index.html.
The place where to paste the `<script .../>` tags is defined with the destinationTemplate option.
The destinationTemplate marker (`@@script_imports` as default value) must be present in the index template.

```js
grunt.initConfig({
  script_imports: {
    options: {
      destinationTemplate: '@@script_imports'
    },
    src: [ 'src/**/*.js' ],
    dest: 'target/index.html'
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
