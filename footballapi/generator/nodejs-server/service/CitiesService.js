'use strict';


/**
 * Update city information
 *
 * body CityEditDto City information to save in persistance (optional)
 * id String Unique identifier of the resource.
 * returns CityDto
 **/
exports.v2CitiesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
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
 * Store a newly created city in storage
 *
 * body CityEditDto  (optional)
 * returns CityDto
 **/
exports.v2CitiesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : {
    "code" : "code",
    "name" : "name",
    "id" : "id"
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

