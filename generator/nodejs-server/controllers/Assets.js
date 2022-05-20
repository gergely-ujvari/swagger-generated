'use strict';

var utils = require('../utils/writer.js');
var Assets = require('../service/AssetsService');

module.exports.v2AssetsDELETE = function v2AssetsDELETE (req, res, next, body) {
  Assets.v2AssetsDELETE(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2AssetsPOST = function v2AssetsPOST (req, res, next, body) {
  Assets.v2AssetsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
