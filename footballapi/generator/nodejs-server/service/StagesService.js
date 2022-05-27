'use strict';


/**
 * Listing for Stages resources
 *
 * team_id Integer Filter stages by a team which is participating in the stage (optional)
 * tournament_ids String CSV list of tournament.id values to filter stages (optional)
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.stagesGET = function(team_id,tournament_ids,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "end_date" : "end_date",
  "name" : "name",
  "season" : {
    "name" : "name",
    "active" : true,
    "id" : 6
  },
  "stage_groups" : 5,
  "id" : 0,
  "tournament" : {
    "country" : {
      "name" : "name",
      "url_flag" : "url_flag",
      "id" : 5
    },
    "url_logo" : "url_logo",
    "name" : "name",
    "regional_league" : true,
    "id" : 1
  },
  "live" : true,
  "cup" : true,
  "start_date" : "start_date"
}, {
  "end_date" : "end_date",
  "name" : "name",
  "season" : {
    "name" : "name",
    "active" : true,
    "id" : 6
  },
  "stage_groups" : 5,
  "id" : 0,
  "tournament" : {
    "country" : {
      "name" : "name",
      "url_flag" : "url_flag",
      "id" : 5
    },
    "url_logo" : "url_logo",
    "name" : "name",
    "regional_league" : true,
    "id" : 1
  },
  "live" : true,
  "cup" : true,
  "start_date" : "start_date"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permanently delete group
 *
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2GroupsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all groups for specific stage
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_StageGroupCollection
 **/
exports.v2StagesIdGroupsGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "groups" : [ {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
  }, {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
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
 * Create or update multiple groups
 *
 * body List List of groups to be updated or created
 * id String Unique identifier of the resource.
 * returns v2_StageGroupCollection
 **/
exports.v2StagesIdGroupsPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "groups" : [ {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
  }, {
    "name" : "name",
    "order_in_stage" : 0,
    "id" : "id"
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
 * Replace teams in stage
 *
 * body List List of team ids
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2StagesIdTeamsPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

