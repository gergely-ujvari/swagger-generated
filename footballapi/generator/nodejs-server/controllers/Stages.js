'use strict';

var utils = require('../utils/writer.js');
var Stages = require('../service/StagesService');

module.exports.stagesGET = function stagesGET (req, res, next, team_id, tournament_ids, acceptLanguage) {
  Stages.stagesGET(team_id, tournament_ids, acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2GroupsIdDELETE = function v2GroupsIdDELETE (req, res, next, id) {
  Stages.v2GroupsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StagesIdGroupsGET = function v2StagesIdGroupsGET (req, res, next, id, language_code) {
  Stages.v2StagesIdGroupsGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StagesIdGroupsPOST = function v2StagesIdGroupsPOST (req, res, next, body, id) {
  Stages.v2StagesIdGroupsPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2StagesIdTeamsPUT = function v2StagesIdTeamsPUT (req, res, next, body, id) {
  Stages.v2StagesIdTeamsPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
