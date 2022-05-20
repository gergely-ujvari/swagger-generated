'use strict';


/**
 * Get a list of available Country resources
 *
 * acceptLanguage String List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
 * returns List
 **/
exports.countriesGET = function(acceptLanguage) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "code",
  "name" : "England",
  "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
  "id" : 0
}, {
  "code" : "code",
  "name" : "England",
  "url_flag" : "http://football-api.devks.msk.bg/assets/image.png",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

