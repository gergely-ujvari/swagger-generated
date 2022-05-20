'use strict';

var utils = require('../utils/writer.js');
var Lineups = require('../service/LineupsService');

module.exports.lineupsGET = function lineupsGET (req, res, next, acceptLanguage, last_update) {
  Lineups.lineupsGET(acceptLanguage, last_update)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesIdLineupsGET = function v2MatchesIdLineupsGET (req, res, next, id, language_code) {
  Lineups.v2MatchesIdLineupsGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesIdLineupsPUT = function v2MatchesIdLineupsPUT (req, res, next, body, id) {
  Lineups.v2MatchesIdLineupsPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
