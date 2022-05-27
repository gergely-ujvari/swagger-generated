'use strict';


/**
 * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * last_update Date Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours (optional)
 * returns List
 **/
exports.event_incidentsGET = function(acceptLanguage,last_update) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "goal_away" : 1,
  "event_id" : 1,
  "deleted" : true,
  "goal_home" : 2,
  "sortorder" : 6,
  "id" : 1,
  "team_id" : 0,
  "type" : "penalty_shootout_scored",
  "home_team" : true,
  "minute" : 68,
  "player" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  }
}, {
  "goal_away" : 1,
  "event_id" : 1,
  "deleted" : true,
  "goal_home" : 2,
  "sortorder" : 6,
  "id" : 1,
  "team_id" : 0,
  "type" : "penalty_shootout_scored",
  "home_team" : true,
  "minute" : 68,
  "player" : {
    "name" : "Cristiano Ronaldo",
    "id" : 5,
    "url_thumb" : "http://football-api.devks.msk.bg/assets/image.jpeg",
    "url_image" : "http://football-api.devks.msk.bg/assets/image.jpeg"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

