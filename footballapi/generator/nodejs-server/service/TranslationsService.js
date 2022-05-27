'use strict';


/**
 * Get all possible translation entities.
 *
 * returns List
 **/
exports.v2TranslationsEntitiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "entity" : "LINEUP_PLAYER_TYPE"
}, {
  "entity" : "LINEUP_PLAYER_TYPE"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Bulk Upsert translations by primary key
 *
 * body List Array of translations (optional)
 * returns TranslationDto
 **/
exports.v2TranslationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : {
    "language" : "language",
    "entity_id" : "entity_id",
    "entity" : "LINEUP_PLAYER_TYPE"
  },
  "content" : {
    "three_letter_code" : "three_letter_code",
    "name" : "name",
    "short_name" : "short_name"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Bulk find in translations table and return matching entries by the unique translation key.
 *
 * body List Array of translationKeys (optional)
 * returns List
 **/
exports.v2TranslationsSearchPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "key" : {
    "language" : "language",
    "entity_id" : "entity_id",
    "entity" : "LINEUP_PLAYER_TYPE"
  },
  "content" : {
    "three_letter_code" : "three_letter_code",
    "name" : "name",
    "short_name" : "short_name"
  }
}, {
  "key" : {
    "language" : "language",
    "entity_id" : "entity_id",
    "entity" : "LINEUP_PLAYER_TYPE"
  },
  "content" : {
    "three_letter_code" : "three_letter_code",
    "name" : "name",
    "short_name" : "short_name"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

