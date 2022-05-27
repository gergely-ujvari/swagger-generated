'use strict';


/**
 * Get a list of available EventPlayerType objects in the system
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns EventPlayerType
 **/
exports.event_player_typesGET = function(acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "code",
  "name" : "name",
  "category" : "miss"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

