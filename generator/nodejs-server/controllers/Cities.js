'use strict';

var utils = require('../utils/writer.js');
var Cities = require('../service/CitiesService');

module.exports.v2CitiesIdPUT = function v2CitiesIdPUT (req, res, next, body, id) {
  Cities.v2CitiesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2CitiesPOST = function v2CitiesPOST (req, res, next, body) {
  Cities.v2CitiesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
