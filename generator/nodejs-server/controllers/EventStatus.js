'use strict';

var utils = require('../utils/writer.js');
var EventStatus = require('../service/EventStatusService');

module.exports.event_statusGET = function event_statusGET (req, res, next, acceptLanguage) {
  EventStatus.event_statusGET(acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
