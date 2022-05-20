'use strict';

var utils = require('../utils/writer.js');
var TeamStats = require('../service/TeamStatsService');

module.exports.event_teamstatsGET = function event_teamstatsGET (req, res, next, acceptLanguage, last_update) {
  TeamStats.event_teamstatsGET(acceptLanguage, last_update)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdTeamstatsGET = function eventsIdTeamstatsGET (req, res, next, id, acceptLanguage) {
  TeamStats.eventsIdTeamstatsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
