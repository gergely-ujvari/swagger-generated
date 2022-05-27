'use strict';

var utils = require('../utils/writer.js');
var Mappings = require('../service/MappingsService');

module.exports.mappingsSportalGET = function mappingsSportalGET (req, res, next, object, id) {
  Mappings.mappingsSportalGET(object, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mappingsSportalReverseGET = function mappingsSportalReverseGET (req, res, next, object, id) {
  Mappings.mappingsSportalReverseGET(object, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
