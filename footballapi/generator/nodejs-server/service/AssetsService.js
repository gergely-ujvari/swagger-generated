'use strict';


/**
 * Bulk delete assets
 *
 * body List Array of assets (optional)
 * no response value expected for this operation
 **/
exports.v2AssetsDELETE = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Bulk Upsert assets
 *
 * body List Array of assets (optional)
 * returns v2_Asset
 **/
exports.v2AssetsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "path" : "path",
  "context_type" : "context_type",
  "context_id" : "context_id",
  "entity_id" : "entity_id",
  "type" : "type",
  "entity" : "entity"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

