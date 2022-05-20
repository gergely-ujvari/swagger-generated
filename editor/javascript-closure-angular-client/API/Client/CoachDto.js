goog.provide('API.Client.CoachDto');

/**
 * @record
 */
API.Client.CoachDto = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.CoachDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.CoachDto.prototype.name;

/**
 * @type {!API.Client.CountryDto}
 * @export
 */
API.Client.CoachDto.prototype.country;

/**
 * @type {!string}
 * @export
 */
API.Client.CoachDto.prototype.birthdate;

/**
 * @type {!string}
 * @export
 */
API.Client.CoachDto.prototype.gender;

/** @enum {string} */
API.Client.CoachDto.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
