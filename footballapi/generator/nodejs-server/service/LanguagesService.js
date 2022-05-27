'use strict';


/**
 * Get all possible languages.
 *
 * returns List
 **/
exports.v2LanguagesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "code"
}, {
  "code" : "code"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

