goog.provide('API.Client.v2_Tournament');

/**
 * @record
 */
API.Client.V2Tournament = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Tournament.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Tournament.prototype.name;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2Tournament.prototype.country;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Tournament.prototype.gender;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Tournament.prototype.type;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Tournament.prototype.region;

/** @enum {string} */
API.Client.V2Tournament.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
/** @enum {string} */
API.Client.V2Tournament.TypeEnum = { 
  CUP: 'CUP',
  LEAGUE: 'LEAGUE',
}
/** @enum {string} */
API.Client.V2Tournament.RegionEnum = { 
  DOMESTIC: 'DOMESTIC',
  INTERNATIONAL: 'INTERNATIONAL',
}
