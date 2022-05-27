goog.provide('API.Client.PlayerDto');

/**
 * @record
 */
API.Client.PlayerDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerDto.prototype.name;

/**
 * @type {!API.Client.CountryDto}
 * @export
 */
API.Client.PlayerDto.prototype.country;

/**
 * @type {!boolean}
 * @export
 */
API.Client.PlayerDto.prototype.active;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerDto.prototype.birthdate;

/**
 * @type {!API.Client.CityDto}
 * @export
 */
API.Client.PlayerDto.prototype.birthCity;

/**
 * @type {!API.Client.PlayerProfileDto}
 * @export
 */
API.Client.PlayerDto.prototype.profile;

/**
 * @type {!API.Client.PlayerEditSocialDto}
 * @export
 */
API.Client.PlayerDto.prototype.social;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerDto.prototype.position;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerDto.prototype.gender;

/** @enum {string} */
API.Client.PlayerDto.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
