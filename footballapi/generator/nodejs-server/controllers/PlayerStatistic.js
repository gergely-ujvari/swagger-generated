'use strict';

var utils = require('../utils/writer.js');
var PlayerStatistic = require('../service/PlayerStatisticService');

module.exports.statisticsPlayersGET = function statisticsPlayersGET (req, res, next, language_code, player_ids, season_ids, team_id) {
  PlayerStatistic.statisticsPlayersGET(language_code, player_ids, season_ids, team_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StatisticsPlayersMatchPUT = function v2StatisticsPlayersMatchPUT (req, res, next, body) {
  PlayerStatistic.v2StatisticsPlayersMatchPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StatisticsPlayersSeasonGET = function v2StatisticsPlayersSeasonGET (req, res, next, player_ids, season_ids, team_id, language_code) {
  PlayerStatistic.v2StatisticsPlayersSeasonGET(player_ids, season_ids, team_id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
