'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.eventsBy_teamsGET = function eventsBy_teamsGET (req, res, next, home_id, away_id, acceptLanguage) {
  Events.eventsBy_teamsGET(home_id, away_id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next, acceptLanguage, from_time, to_time, group_by, client_order) {
  Events.eventsGET(acceptLanguage, from_time, to_time, group_by, client_order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdGET = function eventsIdGET (req, res, next, id, acceptLanguage, expand) {
  Events.eventsIdGET(id, acceptLanguage, expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdIncidentsGET = function eventsIdIncidentsGET (req, res, next, id, acceptLanguage, group_by, direction) {
  Events.eventsIdIncidentsGET(id, acceptLanguage, group_by, direction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdLineupsGET = function eventsIdLineupsGET (req, res, next, id, acceptLanguage) {
  Events.eventsIdLineupsGET(id, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdPlayersGET = function eventsIdPlayersGET (req, res, next, id, acceptLanguage, group_by) {
  Events.eventsIdPlayersGET(id, acceptLanguage, group_by)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdPregameoddsGET = function eventsIdPregameoddsGET (req, res, next, id, xOddClient) {
  Events.eventsIdPregameoddsGET(id, xOddClient)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsLiveGET = function eventsLiveGET (req, res, next, acceptLanguage, group_by) {
  Events.eventsLiveGET(acceptLanguage, group_by)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsSinceGET = function eventsSinceGET (req, res, next, acceptLanguage, last_update) {
  Events.eventsSinceGET(acceptLanguage, last_update)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.matchesGET = function matchesGET (req, res, next, acceptLanguage, from_start_time, to_start_time, team_ids, match_ids, tournament_ids, stage_ids, rounds, season_ids, status_types, offset, limit, tournament_order, referee_id, venue_id, status_code, sort_direction) {
  Events.matchesGET(acceptLanguage, from_start_time, to_start_time, team_ids, match_ids, tournament_ids, stage_ids, rounds, season_ids, status_types, offset, limit, tournament_order, referee_id, venue_id, status_code, sort_direction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tournamentsSeasonsStagesIdEventsGET = function tournamentsSeasonsStagesIdEventsGET (req, res, next, id, round, sort_direction, acceptLanguage) {
  Events.tournamentsSeasonsStagesIdEventsGET(id, round, sort_direction, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
