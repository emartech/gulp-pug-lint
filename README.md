# Gulp plugin for jade-lint

[![npm version](https://badge.fury.io/js/gulp-jade-lint.svg)](http://badge.fury.io/js/gulp-jade-lint)
[![Dependency Status](https://david-dm.org/emartech/gulp-jade-lint.svg)](https://david-dm.org/emartech/gulp-jade-lint)
[![devDependency Status](https://david-dm.org/emartech/gulp-jade-lint/dev-status.svg)](https://david-dm.org/emartech/gulp-jade-lint#info=devDependencies)

## Usage

```javascript
var gulp = require('gulp'),
  jadelint = require('gulp-jade-lint');

gulp.task('default', function () {
  return gulp
    .src('views/*.jade')
    .pipe(jadelint());
});
```

## Configuration

Plugin will read [.jade-lintrc file](https://github.com/benedfit/jade-lint#configuration-file).
