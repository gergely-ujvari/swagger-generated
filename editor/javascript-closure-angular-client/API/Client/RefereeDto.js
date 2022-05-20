goog.provide('API.Client.RefereeDto');

/**
 * @record
 */
API.Client.RefereeDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.RefereeDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.RefereeDto.prototype.name;

/**
 * @type {!API.Client.CountryDto}
 * @export
 */
API.Client.RefereeDto.prototype.country;

/**
 * @type {!string}
 * @export
 */
API.Client.RefereeDto.prototype.birthdate;

/**
 * @type {!boolean}
 * @export
 */
API.Client.RefereeDto.prototype.active;

/**
 * @type {!string}
 * @export
 */
API.Client.RefereeDto.prototype.gender;

/** @enum {string} */
API.Client.RefereeDto.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
