'use strict';

var utils = require('../utils/writer.js');
var EventPlayerType = require('../service/EventPlayerTypeService');

module.exports.event_player_typesGET = function event_player_typesGET (req, res, next, acceptLanguage) {
  EventPlayerType.event_player_typesGET(acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
