'use strict';

var _ = require('lodash');

class ConfigParser {
  static parse(config) {
    if (config.extends) {
      try {
        var configPath = process.cwd() + '/node_modules/jade-lint-config-' + config.extends + '/index.js';
        var defaultConfig = require(configPath);
        return _.extend({}, defaultConfig, _.omit(config, '_'));
      }
      catch (e) {
        // no prob
      }
    }

    return config;
  }
}

module.exports = ConfigParser.parse;
