'use strict';

var utils = require('../utils/writer.js');
var Venues = require('../service/VenuesService');

module.exports.v2VenuesGET = function v2VenuesGET (req, res, next, offset, limit, season_ids, language_code) {
  Venues.v2VenuesGET(offset, limit, season_ids, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2VenuesIdGET = function v2VenuesIdGET (req, res, next, id, language_code) {
  Venues.v2VenuesIdGET(id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2VenuesIdPUT = function v2VenuesIdPUT (req, res, next, body, id) {
  Venues.v2VenuesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2VenuesPOST = function v2VenuesPOST (req, res, next, body) {
  Venues.v2VenuesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
