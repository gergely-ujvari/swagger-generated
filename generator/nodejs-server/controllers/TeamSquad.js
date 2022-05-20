'use strict';

var utils = require('../utils/writer.js');
var TeamSquad = require('../service/TeamSquadService');

module.exports.v2TeamsIdSquadGET = function v2TeamsIdSquadGET (req, res, next, id, memberStatus, language_code) {
  TeamSquad.v2TeamsIdSquadGET(id, memberStatus, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TeamsIdSquadPATCH = function v2TeamsIdSquadPATCH (req, res, next, body, id) {
  TeamSquad.v2TeamsIdSquadPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
