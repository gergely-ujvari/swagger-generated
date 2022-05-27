'use strict';

var utils = require('../utils/writer.js');
var KnockoutScheme = require('../service/KnockoutSchemeService');

module.exports.v2Knockout_schemesStage_idGET = function v2Knockout_schemesStage_idGET (req, res, next, stage_id, language_code) {
  KnockoutScheme.v2Knockout_schemesStage_idGET(stage_id, language_code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
