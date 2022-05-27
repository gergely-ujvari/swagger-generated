'use strict';

var utils = require('../utils/writer.js');
var Translations = require('../service/TranslationsService');

module.exports.v2TranslationsEntitiesGET = function v2TranslationsEntitiesGET (req, res, next) {
  Translations.v2TranslationsEntitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TranslationsPOST = function v2TranslationsPOST (req, res, next, body) {
  Translations.v2TranslationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2TranslationsSearchPOST = function v2TranslationsSearchPOST (req, res, next, body) {
  Translations.v2TranslationsSearchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
