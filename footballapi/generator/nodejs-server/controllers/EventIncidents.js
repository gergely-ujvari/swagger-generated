'use strict';

var utils = require('../utils/writer.js');
var EventIncidents = require('../service/EventIncidentsService');

module.exports.event_incidentsGET = function event_incidentsGET (req, res, next, acceptLanguage, last_update) {
  EventIncidents.event_incidentsGET(acceptLanguage, last_update)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
