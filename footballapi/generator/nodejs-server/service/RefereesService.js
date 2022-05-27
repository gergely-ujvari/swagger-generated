'use strict';


/**
 * List referees with offset and limit parameters
 *
 * offset Integer The number of items to skip before starting to collect the result set
 * limit Integer Limit the number of results returned
 * season_ids String Filter referees which have refereed matches in the specified CSV season_ids (optional)
 * language_code String Returns translated response based on the language code (optional)
 * returns RefereePageDto
 **/
exports.v2RefereesGET = function(offset,limit,season_ids,language_code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "referees" : [ {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "birthdate" : "birthdate",
    "gender" : "MALE",
    "name" : "name",
    "active" : true,
    "id" : "id"
  }, {
    "country" : {
      "code" : "code",
      "name" : "name",
      "id" : "id"
    },
    "birthdate" : "birthdate",
    "gender" : "MALE",
    "name" : "name",
    "active" : true,
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
 * Get referee by id
 *
 * id String Unique identifier of the resource.
 * language_code String Returns translated response based on the language code (optional)
 * returns RefereeDto
 **/
exports.v2RefereesIdGET = function(id,language_code) {
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
  "active" : true,
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
 * Update referee information
 *
 * body RefereeEditDto Referee information to save in persistance (optional)
 * id String Unique identifier of the resource.
 * returns RefereeDto
 **/
exports.v2RefereesIdPUT = function(body,id) {
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
  "active" : true,
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
 * Store a newly created referee in storage
 *
 * body RefereeEditDto  (optional)
 * returns RefereeDto
 **/
exports.v2RefereesPOST = function(body) {
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
  "active" : true,
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

