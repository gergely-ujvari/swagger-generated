'use strict';


/**
 * List coaches with offset and limit parameters
 *
 * offset Integer The number of items to skip before starting to collect the result set
 * limit Integer Limit the number of results returned
 * language_code String Returns translated response based on the language code (optional)
 * returns CoachPageDto
 **/
exports.v2CoachesGET = function(offset,limit,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coaches" : [ {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "birthdate" : "birthdate",
    "gender" : "MALE",
    "name" : "name",
    "id" : 0
  }, {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "birthdate" : "birthdate",
    "gender" : "MALE",
    "name" : "name",
    "id" : 0
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
 * Find coach by id
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns List
 **/
exports.v2CoachesIdGET = function(id,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "birthdate" : "birthdate",
  "gender" : "MALE",
  "name" : "name",
  "id" : 0
}, {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "birthdate" : "birthdate",
  "gender" : "MALE",
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update coach information
 *
 * body CoachEditDto Coach information to save in persistance (optional)
 * id String Unique identifier of the resource.
 * returns CoachDto
 **/
exports.v2CoachesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "birthdate" : "birthdate",
  "gender" : "MALE",
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Store a newly created coach in storage
 *
 * body CoachEditDto  (optional)
 * returns CoachDto
 **/
exports.v2CoachesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
  },
  "birthdate" : "birthdate",
  "gender" : "MALE",
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

