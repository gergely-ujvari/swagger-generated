'use strict';


/**
 * Get a list of available StandingRule objects in the system
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns StandingRule
 **/
exports.standing_rulesGET = function(acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "championsleague",
  "name" : "Champions League",
  "description" : "description",
  "id" : 0,
  "type" : "promotion"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

