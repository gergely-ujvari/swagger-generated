goog.provide('API.Client.v2_Coach');

/**
 * @record
 */
API.Client.V2Coach = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Coach.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Coach.prototype.name;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2Coach.prototype.country;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Coach.prototype.birthdate;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Coach.prototype.gender;

/** @enum {string} */
API.Client.V2Coach.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
