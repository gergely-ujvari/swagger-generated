'use strict';


/**
 * Get a list of rounds per season
 *
 * season_id Integer Filter round types per a season ID
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_RoundTypes
 **/
exports.v2RoundsGET = function(season_id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rounds" : [ {
    "end_date" : "end_date",
    "name" : "name",
    "id" : "id",
    "type" : "type",
    "key" : "key",
    "start_date" : "start_date",
    "status" : "status"
  }, {
    "end_date" : "end_date",
    "name" : "name",
    "id" : "id",
    "type" : "type",
    "key" : "key",
    "start_date" : "start_date",
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of rounds per stage
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_RoundTypes
 **/
exports.v2StagesIdRoundsGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rounds" : [ {
    "end_date" : "end_date",
    "name" : "name",
    "id" : "id",
    "type" : "type",
    "key" : "key",
    "start_date" : "start_date",
    "status" : "status"
  }, {
    "end_date" : "end_date",
    "name" : "name",
    "id" : "id",
    "type" : "type",
    "key" : "key",
    "start_date" : "start_date",
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

