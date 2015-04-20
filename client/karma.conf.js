'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : true,

    basePath : '',

    // list of files / patterns to load in the browser
    files: [
      "node_modules/requirejs/require.js",
      {pattern:  'bower_components/angular/angular.min.js', watched: true, included: true, served: true},
      {pattern:  'bower_components/**/*.js', watched: true, included: true, served: true},
      {pattern:  'src/app/**/*.js', watched: true, included: true, served: true},
      {pattern:  'test/**/*Spec.js', watched: true, included: false }
    ],

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-jasmine'
    ]
  });
};
