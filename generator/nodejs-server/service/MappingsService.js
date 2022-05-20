'use strict';


/**
 * Get FootballApi ID to Sportal ID maps for various types of objects
 *
 * object String Filter ID maps by a specific object type (optional)
 * id Integer Return single Sportal ID for the specified FootballAPI 'id' (optional)
 * returns Object
 **/
exports.mappingsSportalGET = function(object,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Sportal to Football API ID maps for various types of objects
 *
 * object String Filter ID maps by a specific object type (optional)
 * id Integer Return single FotballApi ID for the specified Sportal 'id' (optional)
 * returns Object
 **/
exports.mappingsSportalReverseGET = function(object,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

