'use strict';

var utils = require('../utils/writer.js');
var MatchEvents = require('../service/MatchEventsService');

module.exports.v2MatchesIdEventsGET = function v2MatchesIdEventsGET (req, res, next, id, language_code) {
  MatchEvents.v2MatchesIdEventsGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2MatchesIdEventsPUT = function v2MatchesIdEventsPUT (req, res, next, body, id) {
  MatchEvents.v2MatchesIdEventsPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
