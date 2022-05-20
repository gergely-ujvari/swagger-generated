'use strict';

var utils = require('../utils/writer.js');
var Matches = require('../service/MatchesService');

module.exports.matchesIdCommentaryGET = function matchesIdCommentaryGET (req, res, next, id, language_code) {
  Matches.matchesIdCommentaryGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesGET = function v2MatchesGET (req, res, next, limit, offset, tournament_ids, season_ids, stage_ids, group_ids, round_ids, round_filter, from_kickoff_time, to_kickoff_time, team_ids, status_types, status_codes, referee_id, venue_id, sort_direction) {
  Matches.v2MatchesGET(limit, offset, tournament_ids, season_ids, stage_ids, group_ids, round_ids, round_filter, from_kickoff_time, to_kickoff_time, team_ids, status_types, status_codes, referee_id, venue_id, sort_direction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesIdGET = function v2MatchesIdGET (req, res, next, id, language_code) {
  Matches.v2MatchesIdGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesIdPUT = function v2MatchesIdPUT (req, res, next, body, id) {
  Matches.v2MatchesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesLivescoreGET = function v2MatchesLivescoreGET (req, res, next, match_ids, date, utc_offset, tournament_group, status_types, selection_filter) {
  Matches.v2MatchesLivescoreGET(match_ids, date, utc_offset, tournament_group, status_types, selection_filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesPOST = function v2MatchesPOST (req, res, next, body) {
  Matches.v2MatchesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
