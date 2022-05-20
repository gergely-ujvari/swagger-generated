'use strict';


/**
 * Get a list of available EventStatus objects in the system
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns EventStatus
 **/
exports.event_statusGET = function(acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "finished",
  "name" : "Finished",
  "short_name" : "FIN",
  "type" : "finished"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

