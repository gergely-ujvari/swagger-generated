'use strict';


/**
 * Bulk find provider to internal ID mappings by their provider ID and entity type.
 *
 * body Mappings_search_body Data entity provider name and array of mapping requests (optional)
 * returns List
 **/
exports.v2MappingsSearchPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "domain_id" : "domain_id",
  "entity_type" : "PLAYER",
  "provider" : "provider",
  "provider_id" : "provider_id"
}, {
  "domain_id" : "domain_id",
  "entity_type" : "PLAYER",
  "provider" : "provider",
  "provider_id" : "provider_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

