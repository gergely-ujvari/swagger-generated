'use strict';


/**
 * List venues with offset and limit parameters
 *
 * offset Integer The number of items to skip before starting to collect the result set
 * limit Integer Limit the number of results returned
 * season_ids String Filter venues which have hosted matches in the specified CSV season_ids (optional)
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_VenuesList
 **/
exports.v2VenuesGET = function(offset,limit,season_ids,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "venues" : [ {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "city" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "name" : "name",
      "id" : "id"
    },
    "profile" : { },
    "name" : "name",
    "id" : "id"
  }, {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "city" : {
      "country" : {
        "code" : "code",
        "name" : "name",
        "id" : "id"
      },
      "name" : "name",
      "id" : "id"
    },
    "profile" : { },
    "name" : "name",
    "id" : "id"
  } ],
  "page_meta" : {
    "total" : 6,
    "offset" : 1,
    "limit" : 5
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
 * Get venue by id
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns v2_VenuesGetId
 **/
exports.v2VenuesIdGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profile" : {
    "lng" : 6.0274563,
    "lat" : 0.8008282,
    "capacity" : 1
  },
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
 * Update venue information
 *
 * body V2_put_venues Venue information to save in persistance (optional)
 * id String Unique identifier of the resource.
 * returns v2_VenuesPut
 **/
exports.v2VenuesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "city" : {
    "name" : "name",
    "id" : "id"
  },
  "profile" : {
    "lng" : 6.0274563,
    "lat" : 0.8008282,
    "capacity" : 1
  },
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
 * Store a newly created venue in storage
 *
 * body V2_post_venues  (optional)
 * returns v2_Venues
 **/
exports.v2VenuesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "city" : {
    "name" : "name",
    "id" : "id"
  },
  "profile" : {
    "lng" : 6.0274563,
    "lat" : 0.8008282,
    "capacity" : 1
  },
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

