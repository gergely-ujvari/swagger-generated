'use strict';


/**
 * Update a league standing table
 *
 * body V2_LeagueStandingInput List of all entries for the standing
 * entity String type of entity to attach standing to
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2StandingsLeagueEntityIdPUT = function(body,entity,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Attach standing rules to a league standing
 *
 * body V2_StandingEntryRuleWrapper list of rules for every rank
 * entity String type of entity to attach standing to
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2StandingsLeagueEntityIdRulesPUT = function(body,entity,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a topscorer standing table
 *
 * body V2_TopScorerStandingInput List of all entries for the standing
 * entity String type of entity to attach standing to
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2StandingsTopscorerEntityIdPUT = function(body,entity,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

