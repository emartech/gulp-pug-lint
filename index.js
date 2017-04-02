'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var PugLint = require('pug-lint');
var RcLoader = require('rcloader');
var configParser = require('./config_parser');

module.exports = function(options) {
  var rc = new RcLoader('.pug-lintrc', options);
  var totalErrors = 0;

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
          gutil.log(gutil.colors.cyan(errors.length) + ' issues found in ' + gutil.colors.magenta(file.path));
          errors.forEach(function(error) {
            gutil.log(error.message);
          });
          totalErrors += errors.length;
        }
      } catch (errLint) {
        return cb(new gutil.PluginError('gulp-pug-lint', errLint));
      }

      cb(null, file);
    });

  }, function(cb) {
    if (options && options.failOnError && totalErrors > 0) {
      cb(new gutil.PluginError('gulp-pug-lint', 'Failed with ' + totalErrors + ' errors'));
    } else {
      cb();
    }
  });

};
