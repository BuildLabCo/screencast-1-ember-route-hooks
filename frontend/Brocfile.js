/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  // temporary workaround to use HTML bars
  vendorFiles: {
    'handlebars.js': null
  }
});

app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts'
});

app.import('bower_components/bootstrap/dist/js/bootstrap.js');

module.exports = app.toTree();
