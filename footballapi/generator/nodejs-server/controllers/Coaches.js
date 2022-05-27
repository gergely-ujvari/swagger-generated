'use strict';

var utils = require('../utils/writer.js');
var Coaches = require('../service/CoachesService');

module.exports.v2CoachesGET = function v2CoachesGET (req, res, next, offset, limit, language_code) {
  Coaches.v2CoachesGET(offset, limit, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2CoachesIdGET = function v2CoachesIdGET (req, res, next, id, language_code) {
  Coaches.v2CoachesIdGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2CoachesIdPUT = function v2CoachesIdPUT (req, res, next, body, id) {
  Coaches.v2CoachesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2CoachesPOST = function v2CoachesPOST (req, res, next, body) {
  Coaches.v2CoachesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
