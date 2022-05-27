'use strict';

var utils = require('../utils/writer.js');
var Blacklist = require('../service/BlacklistService');

module.exports.v2BlacklistIdDELETE = function v2BlacklistIdDELETE (req, res, next, id) {
  Blacklist.v2BlacklistIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2BlacklistSearchPOST = function v2BlacklistSearchPOST (req, res, next, body) {
  Blacklist.v2BlacklistSearchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
