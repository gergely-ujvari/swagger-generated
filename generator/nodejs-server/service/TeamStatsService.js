'use strict';


/**
 * Get statistics for the performance of each team involved in the event
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * last_update Date Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours (optional)
 * returns List
 **/
exports.event_teamstatsGET = function(acceptLanguage,last_update) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "event_id" : 7,
  "team" : {
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "MALE",
    "undecided" : true,
    "name" : "Real Madrid",
    "national" : true,
    "threeLetterCode" : "RMA",
    "id" : 6,
    "shortName" : "Loko Plovdiv",
    "type" : "placeholder"
  },
  "home_team" : true,
  "statistics" : {
    "pass" : 0,
    "possession" : 6,
    "yellow_cards" : 1,
    "crosses" : 5,
    "treatments" : 7,
    "corners" : 5,
    "throw_in" : 2,
    "offside" : 2,
    "shots_on" : 7,
    "substitutions" : 1,
    "shots_off" : 3,
    "counter_attacks" : 1,
    "fouls_committed" : 6,
    "shots_blocked" : 9,
    "goal_kicks" : 4,
    "goals" : 1
  }
}, {
  "event_id" : 7,
  "team" : {
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "MALE",
    "undecided" : true,
    "name" : "Real Madrid",
    "national" : true,
    "threeLetterCode" : "RMA",
    "id" : 6,
    "shortName" : "Loko Plovdiv",
    "type" : "placeholder"
  },
  "home_team" : true,
  "statistics" : {
    "pass" : 0,
    "possession" : 6,
    "yellow_cards" : 1,
    "crosses" : 5,
    "treatments" : 7,
    "corners" : 5,
    "throw_in" : 2,
    "offside" : 2,
    "shots_on" : 7,
    "substitutions" : 1,
    "shots_off" : 3,
    "counter_attacks" : 1,
    "fouls_committed" : 6,
    "shots_blocked" : 9,
    "goal_kicks" : 4,
    "goals" : 1
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get statistics for the performance of each team involved in the event
 *
 * id Integer Event.id for which team stats are requested
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.eventsIdTeamstatsGET = function(id,acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "event_id" : 7,
  "team" : {
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "MALE",
    "undecided" : true,
    "name" : "Real Madrid",
    "national" : true,
    "threeLetterCode" : "RMA",
    "id" : 6,
    "shortName" : "Loko Plovdiv",
    "type" : "placeholder"
  },
  "home_team" : true,
  "statistics" : {
    "pass" : 0,
    "possession" : 6,
    "yellow_cards" : 1,
    "crosses" : 5,
    "treatments" : 7,
    "corners" : 5,
    "throw_in" : 2,
    "offside" : 2,
    "shots_on" : 7,
    "substitutions" : 1,
    "shots_off" : 3,
    "counter_attacks" : 1,
    "fouls_committed" : 6,
    "shots_blocked" : 9,
    "goal_kicks" : 4,
    "goals" : 1
  }
}, {
  "event_id" : 7,
  "team" : {
    "url_logo" : "http://football-api.devks.msk.bg/assets/image.png",
    "gender" : "MALE",
    "undecided" : true,
    "name" : "Real Madrid",
    "national" : true,
    "threeLetterCode" : "RMA",
    "id" : 6,
    "shortName" : "Loko Plovdiv",
    "type" : "placeholder"
  },
  "home_team" : true,
  "statistics" : {
    "pass" : 0,
    "possession" : 6,
    "yellow_cards" : 1,
    "crosses" : 5,
    "treatments" : 7,
    "corners" : 5,
    "throw_in" : 2,
    "offside" : 2,
    "shots_on" : 7,
    "substitutions" : 1,
    "shots_off" : 3,
    "counter_attacks" : 1,
    "fouls_committed" : 6,
    "shots_blocked" : 9,
    "goal_kicks" : 4,
    "goals" : 1
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

