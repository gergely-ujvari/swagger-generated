goog.provide('API.Client.CityDto');

/**
 * @record
 */
API.Client.CityDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.CityDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.CityDto.prototype.name;

/**
 * @type {!API.Client.CountryDto}
 * @export
 */
API.Client.CityDto.prototype.country;

