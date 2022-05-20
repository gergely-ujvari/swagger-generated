'use strict';

var utils = require('../utils/writer.js');
var Odds = require('../service/OddsService');

module.exports.eventsIdLiveoddsGET = function eventsIdLiveoddsGET (req, res, next, id, xOddClient) {
  Odds.eventsIdLiveoddsGET(id, xOddClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdOddsGET = function eventsIdOddsGET (req, res, next, id, xOddClient) {
  Odds.eventsIdOddsGET(id, xOddClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdPregameoddsGET = function eventsIdPregameoddsGET (req, res, next, id, xOddClient) {
  Odds.eventsIdPregameoddsGET(id, xOddClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.liveoddsGET = function liveoddsGET (req, res, next, xOddClient) {
  Odds.liveoddsGET(xOddClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.odd_providersGET = function odd_providersGET (req, res, next, xOddClient) {
  Odds.odd_providersGET(xOddClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.oddsGET = function oddsGET (req, res, next, odd_client, sport_type, event_type, from_event_start_time, to_event_start_time, team_id, team_ids, event_order, match_ids, tournament_ids, season_ids, odds_type) {
  Odds.oddsGET(odd_client, sport_type, event_type, from_event_start_time, to_event_start_time, team_id, team_ids, event_order, match_ids, tournament_ids, season_ids, odds_type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pregameoddsGET = function pregameoddsGET (req, res, next, xOddClient, from_time, to_time) {
  Odds.pregameoddsGET(xOddClient, from_time, to_time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
