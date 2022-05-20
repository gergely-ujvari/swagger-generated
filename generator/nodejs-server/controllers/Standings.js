'use strict';

var utils = require('../utils/writer.js');
var Standings = require('../service/StandingsService');

module.exports.v2StandingsLeagueEntityIdPUT = function v2StandingsLeagueEntityIdPUT (req, res, next, body, entity, id) {
  Standings.v2StandingsLeagueEntityIdPUT(body, entity, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StandingsLeagueEntityIdRulesPUT = function v2StandingsLeagueEntityIdRulesPUT (req, res, next, body, entity, id) {
  Standings.v2StandingsLeagueEntityIdRulesPUT(body, entity, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StandingsTopscorerEntityIdPUT = function v2StandingsTopscorerEntityIdPUT (req, res, next, body, entity, id) {
  Standings.v2StandingsTopscorerEntityIdPUT(body, entity, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
