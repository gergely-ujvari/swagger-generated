'use strict';

var utils = require('../utils/writer.js');
var Referees = require('../service/RefereesService');

module.exports.v2RefereesGET = function v2RefereesGET (req, res, next, offset, limit, season_ids, language_code) {
  Referees.v2RefereesGET(offset, limit, season_ids, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2RefereesIdGET = function v2RefereesIdGET (req, res, next, id, language_code) {
  Referees.v2RefereesIdGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2RefereesIdPUT = function v2RefereesIdPUT (req, res, next, body, id) {
  Referees.v2RefereesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2RefereesPOST = function v2RefereesPOST (req, res, next, body) {
  Referees.v2RefereesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
