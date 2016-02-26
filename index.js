'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var PugLint = require('pug-lint');
var RcLoader = require('rcloader');
var configParser = require('./config_parser');

module.exports = function(options) {
  var rc = new RcLoader('.pug-lintrc', options);

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new gutil.PluginError('gulp-pug-lint', 'streaming not supported'));
    }

    rc.for(file.path, function(errRc, conf) {
      if (errRc) {
        return cb(new gutil.PluginError('gulp-pug-lint', errRc));
      }

      try {
        var linter = new PugLint();
        linter.configure(configParser(conf));

        var errors = linter.checkFile(file.path);

        if (errors.length) {
          throw new gutil.PluginError('gulp-pug-lint', errors[0].message);
        }
      } catch (errLint) {
        return cb(new gutil.PluginError('gulp-pug-lint', errLint));
      }

      cb(null, file);
    });

  });

};
