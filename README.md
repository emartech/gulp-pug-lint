# Gulp plugin for pug-lint

[![npm version](https://badge.fury.io/js/gulp-pug-lint.svg)](http://badge.fury.io/js/gulp-pug-lint)
[![Dependency Status](https://david-dm.org/emartech/gulp-pug-lint.svg)](https://david-dm.org/emartech/gulp-pug-lint)
[![devDependency Status](https://david-dm.org/emartech/gulp-pug-lint/dev-status.svg)](https://david-dm.org/emartech/gulp-pug-lint#info=devDependencies)

## Usage

```javascript
var gulp = require('gulp'),
  puglint = require('gulp-pug-lint');

gulp.task('default', function () {
  return gulp
    .src('views/*.jade')
    .pipe(puglint());
});
```

## Configuration

Plugin will read [.pug-lintrc file](https://github.com/pugjs/pug-lint#configuration-file).
