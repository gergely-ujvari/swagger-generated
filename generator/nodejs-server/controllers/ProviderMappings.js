'use strict';

var utils = require('../utils/writer.js');
var ProviderMappings = require('../service/ProviderMappingsService');

module.exports.v2MappingsSearchPOST = function v2MappingsSearchPOST (req, res, next, body) {
  ProviderMappings.v2MappingsSearchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
