'use strict';

var _ = require('lodash');

class ConfigParser {
  static parse(config) {
    if (config.extends) {
      var configPath = process.cwd() + '/node_modules/jade-lint-config-' + config.extends + '/index.js';

      try {
        var defaultConfig = require(configPath);
        return _.extend({}, defaultConfig, _.omit(config, 'extends'));
      } catch (e) {
        // no prob
      }
    }

    return config;
  }
}

module.exports = ConfigParser.parse;
