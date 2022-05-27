'use strict';

var utils = require('../utils/writer.js');
var Season = require('../service/SeasonService');

module.exports.v2SeasonsDetailsGET = function v2SeasonsDetailsGET (req, res, next, season_id, tournament_id, status, language_code) {
  Season.v2SeasonsDetailsGET(season_id, tournament_id, status, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2SeasonsGET = function v2SeasonsGET (req, res, next, tournament_id, team_id, status, language_code) {
  Season.v2SeasonsGET(tournament_id, team_id, status, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2SeasonsIdPUT = function v2SeasonsIdPUT (req, res, next, body, id) {
  Season.v2SeasonsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2SeasonsIdStagesGET = function v2SeasonsIdStagesGET (req, res, next, id, language_code) {
  Season.v2SeasonsIdStagesGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2SeasonsIdStagesPOST = function v2SeasonsIdStagesPOST (req, res, next, body, id) {
  Season.v2SeasonsIdStagesPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2SeasonsPOST = function v2SeasonsPOST (req, res, next, body) {
  Season.v2SeasonsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StagesIdDELETE = function v2StagesIdDELETE (req, res, next, id) {
  Season.v2StagesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TournamentsIdSeasonsCurrentPATCH = function v2TournamentsIdSeasonsCurrentPATCH (req, res, next, body, id) {
  Season.v2TournamentsIdSeasonsCurrentPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
