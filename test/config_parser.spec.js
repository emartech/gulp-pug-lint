'use strict';

var emarsysConfig = require('jade-lint-config-emarsys');
var expect = require('chai').expect;
var configParser = require('../config_parser');

describe('configParser', function() {
  it('should return original config without extends', function() {
    var config = configParser({extends: 'emarsys', validateIndentation: 4});

    expect(config.extends).to.be.undefined;
    expect(config.validateIndentation).to.eql(4);
  });

  it('should extend with given config', function() {
    var config = configParser({extends: 'emarsys', additionalField: 4});

    expect(config).to.contain(emarsysConfig);
  })
});