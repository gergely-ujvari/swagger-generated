'use strict';

var utils = require('../utils/writer.js');
var Countries = require('../service/CountriesService');

module.exports.countriesGET = function countriesGET (req, res, next, acceptLanguage) {
  Countries.countriesGET(acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
