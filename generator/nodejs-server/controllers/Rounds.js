'use strict';

var utils = require('../utils/writer.js');
var Rounds = require('../service/RoundsService');

module.exports.v2RoundsGET = function v2RoundsGET (req, res, next, season_id, language_code) {
  Rounds.v2RoundsGET(season_id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StagesIdRoundsGET = function v2StagesIdRoundsGET (req, res, next, id, language_code) {
  Rounds.v2StagesIdRoundsGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
