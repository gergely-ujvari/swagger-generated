'use strict';

var utils = require('../utils/writer.js');
var TournamentGroups = require('../service/TournamentGroupsService');

module.exports.v2TournamentsGroupsCodeGET = function v2TournamentsGroupsCodeGET (req, res, next, code) {
  TournamentGroups.v2TournamentsGroupsCodeGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TournamentsGroupsCodePUT = function v2TournamentsGroupsCodePUT (req, res, next, body, code) {
  TournamentGroups.v2TournamentsGroupsCodePUT(body, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TournamentsGroupsCodeSelectionDatePOST = function v2TournamentsGroupsCodeSelectionDatePOST (req, res, next, body, code, date) {
  TournamentGroups.v2TournamentsGroupsCodeSelectionDatePOST(body, code, date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TournamentsGroupsGET = function v2TournamentsGroupsGET (req, res, next) {
  TournamentGroups.v2TournamentsGroupsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TournamentsGroupsPOST = function v2TournamentsGroupsPOST (req, res, next, body) {
  TournamentGroups.v2TournamentsGroupsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
