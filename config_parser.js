'use strict';

var _ = require('lodash');
var path = require('path');
var util = require('util');

module.exports = function configParser(config) {
  if (config.extends) {
    var configPath = path.resolve(util.format('node_modules/pug-lint-config-%s', config.extends), 'index.js');

    try {
      var defaultConfig = require(configPath);
      return _.extend({}, defaultConfig, _.omit(config, 'extends'));
    } catch (e) {
      // no prob
    }
  }

  return config;
};
