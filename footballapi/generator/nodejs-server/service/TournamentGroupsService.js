'use strict';


/**
 * List all tournaments for a given group name and their order
 *
 * code String Tournament group code
 * returns v2_TournamentGroupGetOutput
 **/
exports.v2TournamentsGroupsCodeGET = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tournaments" : [ {
    "tournament" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "gender" : "MALE",
      "name" : "name",
      "id" : "id",
      "type" : "CUP",
      "region" : "DOMESTIC"
    },
    "sort_order" : 0
  }, {
    "tournament" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "gender" : "MALE",
      "name" : "name",
      "id" : "id",
      "type" : "CUP",
      "region" : "DOMESTIC"
    },
    "sort_order" : 0
  } ],
  "code" : "code",
  "name" : "name",
  "description" : "description"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing tournament group
 *
 * body V2_TournamentGroupUpdateInput Tournament group information
 * code String Tournament group unique code
 * no response value expected for this operation
 **/
exports.v2TournamentsGroupsCodePUT = function(body,code) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body List Array of match ids (optional)
 * code String Client code
 * date date Date in ISO 8601 format (Y-m-d)
 * no response value expected for this operation
 **/
exports.v2TournamentsGroupsCodeSelectionDatePOST = function(body,code,date) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all tournament groups
 *
 * returns v2_TournamentGroupCollection
 **/
exports.v2TournamentsGroupsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "groups" : [ {
    "code" : "code",
    "name" : "name",
    "description" : "description"
  }, {
    "code" : "code",
    "name" : "name",
    "description" : "description"
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
 * Create a new tournament group
 *
 * body V2_TournamentGroupInsertInput Tournament group information
 * no response value expected for this operation
 **/
exports.v2TournamentsGroupsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

