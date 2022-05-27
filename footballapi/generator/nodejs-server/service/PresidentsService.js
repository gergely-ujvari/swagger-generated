'use strict';


/**
 * Update president information
 *
 * body V2_PresidentUpdate President information to save in persistance (optional)
 * id String Unique identifier of the resource.
 * returns v2_President
 **/
exports.v2PresidentsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Store a newly created president in storage
 *
 * body V2_PresidentInput  (optional)
 * returns v2_President
 **/
exports.v2PresidentsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

