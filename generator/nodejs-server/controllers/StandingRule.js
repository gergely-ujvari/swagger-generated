'use strict';

var utils = require('../utils/writer.js');
var StandingRule = require('../service/StandingRuleService');

module.exports.standing_rulesGET = function standing_rulesGET (req, res, next, acceptLanguage) {
  StandingRule.standing_rulesGET(acceptLanguage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
