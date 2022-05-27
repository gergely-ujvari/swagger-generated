'use strict';


/**
 * Remove the specified resource from storage.
 * Remove blacklist record by id.
 *
 * id String Unique identifier of the resource.
 * no response value expected for this operation
 **/
exports.v2BlacklistIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Bulk find in blacklist table and return matching entries by the unique blacklist key.
 *
 * body List Array of blacklistsKeys (optional)
 * returns List
 **/
exports.v2BlacklistSearchPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id",
  "key" : {
    "context" : "context",
    "type" : "TRANSLATION",
    "entity_id" : "entity_id",
    "entity" : "TEAM"
  }
}, {
  "id" : "id",
  "key" : {
    "context" : "context",
    "type" : "TRANSLATION",
    "entity_id" : "entity_id",
    "entity" : "TEAM"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

