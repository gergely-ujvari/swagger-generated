'use strict';

var utils = require('../utils/writer.js');
var Players = require('../service/PlayersService');

module.exports.playersGET = function playersGET (req, res, next, name, acceptLanguage, max_results, team_id) {
  Players.playersGET(name, acceptLanguage, max_results, team_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playersIdGET = function playersIdGET (req, res, next, id, acceptLanguage, expand) {
  Players.playersIdGET(id, acceptLanguage, expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playersIdStatisticsGET = function playersIdStatisticsGET (req, res, next, id, acceptLanguage, type, group_by) {
  Players.playersIdStatisticsGET(id, acceptLanguage, type, group_by)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playersIdTeamsGET = function playersIdTeamsGET (req, res, next, id, acceptLanguage) {
  Players.playersIdTeamsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2PlayersGET = function v2PlayersGET (req, res, next, offset, limit, language_code) {
  Players.v2PlayersGET(offset, limit, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2PlayersIdClubsActivePUT = function v2PlayersIdClubsActivePUT (req, res, next, body, id) {
  Players.v2PlayersIdClubsActivePUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2PlayersIdGET = function v2PlayersIdGET (req, res, next, id, language_code) {
  Players.v2PlayersIdGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2PlayersIdPUT = function v2PlayersIdPUT (req, res, next, body, id) {
  Players.v2PlayersIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2PlayersPOST = function v2PlayersPOST (req, res, next, body) {
  Players.v2PlayersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
