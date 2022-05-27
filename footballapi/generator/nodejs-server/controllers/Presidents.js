'use strict';

var utils = require('../utils/writer.js');
var Presidents = require('../service/PresidentsService');

module.exports.v2PresidentsIdPUT = function v2PresidentsIdPUT (req, res, next, body, id) {
  Presidents.v2PresidentsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2PresidentsPOST = function v2PresidentsPOST (req, res, next, body) {
  Presidents.v2PresidentsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
