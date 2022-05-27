'use strict';

var utils = require('../utils/writer.js');
var Languages = require('../service/LanguagesService');

module.exports.v2LanguagesGET = function v2LanguagesGET (req, res, next) {
  Languages.v2LanguagesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
